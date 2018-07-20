import { SIGN_UP_FAILURE, SIGN_UP_SUCCESS, SIGN_UP_REQUEST } from '../../ducks/sign-up.duck';

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
  default:
    return state;
  }
}
