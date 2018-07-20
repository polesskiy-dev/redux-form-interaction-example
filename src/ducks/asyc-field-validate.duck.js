import { createAction } from 'redux-actions';
import { ofType } from 'redux-observable';
import { of, from } from 'rxjs';
import { map, switchMap, catchError, withLatestFrom, delay } from 'rxjs/operators';
import { SIGN_UP_FORM_NAME } from '../components/SignUpForm/SignUpForm.config';
import { fakeAjax } from '../utils/ajax';

export const VALIDATE_FIELD_REQUEST = 'VALIDATE_FIELD_REQUEST';
export const VALIDATE_FIELD_SUCCESS = 'VALIDATE_FIELD_SUCCESS';
export const VALIDATE_FIELD_FAILURE = 'VALIDATE_FIELD_FAILURE';

export const validateFieldRequest = createAction(VALIDATE_FIELD_REQUEST, ({ values, blurredField }) =>
  ({ values, blurredField }), ({ resolve, reject }) => ({ resolve, reject }));
export const validateFieldSuccess = createAction(VALIDATE_FIELD_SUCCESS);
export const validateFieldFailure = createAction(VALIDATE_FIELD_FAILURE);

export const validateFieldEpic = (action$, state$) => action$.pipe(
  ofType(VALIDATE_FIELD_REQUEST),
  withLatestFrom(state$),
  delay(1500),
  switchMap(([action, state]) => from(fakeAjax(`/validate/${SIGN_UP_FORM_NAME}`, action.payload))
    .pipe(
      map((res) => {
        console.log('%s validated with result: %o', action.payload.blurredField, res);

        action.meta.resolve(res);
        return validateFieldSuccess(res);
      }),
      catchError((error) => {
        console.error('%s invalidated with result: %o', action.payload.blurredField, error.message);

        action.meta.reject(Object.assign({}, Error(error.message), { meta: 'validation error' }));
        return of(validateFieldFailure(error.message));
      })
    ))
);
