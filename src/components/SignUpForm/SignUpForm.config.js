import countrySelectMessages from '../form-elements/ECountrySelect/ECountrySelect.messages';

export const SIGN_UP_FORM_NAME = 'signUpForm';

export const fieldNames = {
  EMAIL: 'email',
  COUNTRY: 'country',
  BIRTH_DATE: 'birthDate',
  PASSWORD: 'password',
  CONFIRM_PASSWORD: 'confirmPassword',
};

export const initialValues = {
  [fieldNames.COUNTRY]: countrySelectMessages.Other,
};
