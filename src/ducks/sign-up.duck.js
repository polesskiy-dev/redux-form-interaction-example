import _ from 'lodash/fp';
import { createAction } from 'redux-actions';
import { ofType } from 'redux-observable';
import { getFormValues } from 'redux-form';
import { of, from } from 'rxjs';
import { map, switchMap, catchError, withLatestFrom, delay } from 'rxjs/operators';
import { SIGN_UP_FORM_NAME } from '../components/SignUpForm/SignUpForm.config';
import { fakeAjax } from '../utils/ajax';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const signUpRequest = createAction(SIGN_UP_REQUEST);
export const signUpSuccess = createAction(SIGN_UP_SUCCESS);
export const signUpFailure = createAction(SIGN_UP_FAILURE);

export const signUpEpic = (action$, state$) => action$.pipe(
  ofType(SIGN_UP_REQUEST),
  withLatestFrom(state$),
  delay(1500),
  switchMap(([, state]) =>
    from(fakeAjax('/sign-up', getFormValues(SIGN_UP_FORM_NAME)(state)))
      .pipe(
        map((res) => {
          console.log('%s submitted successfully with result: %o', SIGN_UP_FORM_NAME, res);

          return signUpSuccess(res);
        }),
        catchError((error) => {
          console.log('%s submitted with error: %o', SIGN_UP_FORM_NAME, error.message);

          return of(signUpFailure(error.message));
        })
      ))
);

export default function reducer(signUpResult = {}, action) {
  switch (action.type) {
  case SIGN_UP_SUCCESS:
    return _.set('response', action.payload, signUpResult);
  case SIGN_UP_FAILURE:
    return _.set('error', action.error, signUpResult);
  default:
    return signUpResult;
  }
}
