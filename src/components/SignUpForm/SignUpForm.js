import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from 'antd/lib/button';
import { Field, reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';

import './SignUpForm.less';

import EInput from '../form-elements/EInput/EInput';
import initialValues from './sign-up-form.initial';
import messages from './sign-up-form.messages';
import signUpFormName, * as fieldNames from './sign-up-form.names';
import { required, email, samePassword } from '../../validation';
import EUpload from '../form-elements/EUpload/EUpload';

@reduxForm({
  form: signUpFormName,
  initialValues
})
export default class SignUpForm extends PureComponent {
  render() {
    return (
      <form className="sign-up-form__wrapper">
        <div className="row">
          <div className="half-size">
            <Field
              name={fieldNames.EMAIL}
              component={EInput}
              props={{
                type: 'text',
                label: messages.labelEmail
              }}
              validate={[required, email]}
            />
          </div>
          <div className="half-size" >
            <EUpload />
          </div>
        </div>
        <Field
          name={fieldNames.PASSWORD}
          component={EInput}
          props={{
            type: 'password',
            label: messages.labelPassword
          }}
          validate={[required]}
        />
        <Field
          name={fieldNames.CONFIRM_PASSWORD}
          component={EInput}
          props={{
            type: 'password',
            label: messages.labelConfirmPassword
          }}
          validate={[required, samePassword]}
        />
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
