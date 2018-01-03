import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    form: formReducer,
  /*language: languageReducer,
  form: formReducer.plugin({
    [signUpFormName]: signUpFormAdditionalReducer,
  }),*/
});

export default rootReducer;
