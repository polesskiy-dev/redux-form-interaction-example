# Redux-form demo

Redux-form provides reach even system and full control on form state.
This demo utilizes some key events in particular fields validation and overall submit validation events fro whole form.

Implemented with: react, redux, redux-form, rxjs, redux-observable, antdesign, less

## Local check

    git clone https://github.com/polesskiy-dev/redux-form-interaction-example
    cd redux-form-interaction-example
    npm install
    npm start
    
## key-features:

* async particular (email now) field validation on blur on server (mocked, 50% chance to pass)
* async validation on submit on server (mocked, 50% chance to pass)
* sync field validation on blur
* initial values
* disabled submit button until form became valid
* disabled submit button during async validation & submitting to prevent multiple form submit
* spinner shows during async validation & submitting

## Components description

This solution can an work with any design system because of flexible wrappers which implements function-as-child pattern.

Core validation wrapper is `<ValidatedFormField />` - it provides place for validation message according to meta data from redux-form e.g. active, touched, invalid, submitting

All design library (e.g. antdesign) wrapped in `<ValidatedFormField />` to have ready for redux-form childs.

All fields described in `SignUpForm.config.js` to define reusable name constants, initial values etc.

Submit validation results provides to state by additional form reducer `SignUpForm.reducer.js` where app can react on actions like `SIGN_UP_FAILURE`, `VALIDATE_FIELD_SUCCESS` and disable/enable submit button

# Notes:
<Field component={f::Function} \/> implements function-as-a-child pattern
