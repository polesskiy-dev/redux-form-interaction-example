import { combineEpics } from 'redux-observable';

import { signUpEpic } from './ducks/sign-up.duck';

const rootEpic = combineEpics(signUpEpic);

export default rootEpic;
