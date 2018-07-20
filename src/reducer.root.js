import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import signUpReducer from './ducks/sign-up.duck';
import signUpFormAdditionalReducer from './components/SignUpForm/SignUpForm.reducer';
import { SIGN_UP_FORM_NAME } from './components/SignUpForm/SignUpForm.config';

const rootReducer = combineReducers({
  form: formReducer.plugin({
    [SIGN_UP_FORM_NAME]: signUpFormAdditionalReducer,
  }),
  signUpResult: signUpReducer,
});

export default rootReducer;
