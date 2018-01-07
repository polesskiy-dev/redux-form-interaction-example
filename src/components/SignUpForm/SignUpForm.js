import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from 'antd/lib/button';
import { Field, reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';

import './SignUpForm.less';

import EInput from '../form-elements/EInput/EInput';
import EUpload from '../form-elements/EUpload/EUpload';
import ECountrySelect from '../form-elements/ECountrySelect/ECountrySelect';
import EDatePicker from '../form-elements/EDatePicker/EDatePicker';
import messages from './SignUpForm.messages';
import { initialValues, fieldNames, SIGN_UP_FORM_NAME } from './SignUpForm.config';
import { required, email, samePassword } from '../../validation';

@reduxForm({
  form: SIGN_UP_FORM_NAME,
  initialValues
})
export default class SignUpForm extends PureComponent {
  render() {
    return (
      <form className="sign-up-form__wrapper">
        <div className="row">
          <div className="alignment-column col-sm-full col-lg-half">
            <Field
              name={fieldNames.EMAIL}
              component={EInput}
              props={{
                type: 'text',
                label: messages.labelEmail
              }}
              validate={[required, email]}
            />
            <Field
              name={fieldNames.COUNTRY}
              component={ECountrySelect}
              props={{
                label: messages.labelCountry
              }}
              validate={[required]}
            />
            <Field
              name={fieldNames.BIRTH_DATE}
              component={EDatePicker}
              props={{
                label: messages.birthDate
              }}
              validate={[required]}
            />
            <Field
              name={fieldNames.PASSWORD}
              component={EInput}
              props={{
                type: 'password',
                label: messages.labelPassword
              }}
              validate={[required]}
            />
          </div>
          <div className="alignment-column col-sm-full col-lg-half" >
            <EUpload />
            <Field
              name={fieldNames.CONFIRM_PASSWORD}
              component={EInput}
              props={{
                type: 'password',
                label: messages.labelConfirmPassword
              }}
              validate={[required, samePassword]}
            />
          </div>
        </div>

        <footer className="sign-up-form__footer">
          <Button
            type="primary"
            size="large"
            // loading
          >
          Submit
            {/* <FormattedMessage {...messages.submit} /> */}
          </Button>
        </footer>
      </form>
    );
  }
}
