import { SIGN_UP_FAILURE, SIGN_UP_SUCCESS, SIGN_UP_REQUEST } from '../../ducks/sign-up.duck';
import { VALIDATE_FIELD_REQUEST, VALIDATE_FIELD_SUCCESS, VALIDATE_FIELD_FAILURE } from '../../ducks/asyc-field-validate.duck';

export default function (state, { type, payload }) {
  switch (type) {
  case SIGN_UP_REQUEST:
    return {
      ...state,
      submitting: true,
    };
  case SIGN_UP_SUCCESS:
    return {
      ...state,
      submitting: false,
      submitFailed: false,
      submitSucceeded: true,
    };
  case SIGN_UP_FAILURE:
    return {
      ...state,
      error: payload,
      submitting: false,
      submitFailed: true,
      submitSucceeded: false,
    };
  case VALIDATE_FIELD_REQUEST:
    return {
      ...state,
      submitting: true,
    };
  case VALIDATE_FIELD_SUCCESS:
    return {
      ...state,
      submitting: false,
    };
  case VALIDATE_FIELD_FAILURE:
    return {
      ...state,
      submitting: false,
    };
  default:
    return state;
  }
}
