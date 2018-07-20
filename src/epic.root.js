import { combineEpics } from 'redux-observable';

import { signUpEpic } from './ducks/sign-up.duck';
import { validateFieldEpic } from './ducks/asyc-field-validate.duck';

const rootEpic = combineEpics(signUpEpic, validateFieldEpic);

export default rootEpic;
