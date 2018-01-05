import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from 'antd/lib/button';
import { Field, reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';

import ValidatedInput from '../form-elements/ValidatedInput/ValidatedInput';
import initialValues from './sign-up-form.initial';
import messages from './sign-up-form.messages';
import signUpFormName, * as fieldNames from './sign-up-form.names';
import { required, email, samePassword } from '../../validation';

console.log(messages);

@reduxForm({
  form: signUpFormName,
  initialValues
})
export default class SignUpForm extends PureComponent {
  render() {
    return (
      <form>
        <Field
          name={fieldNames.EMAIL}
          component={ValidatedInput}
          props={{
            type: 'text',
            label: messages.labelEmail
          }}
          validate={[required, email]}
        />
        <Field
          name={fieldNames.PASSWORD}
          component={ValidatedInput}
          props={{
            type: 'password',
            label: messages.labelPassword
          }}
          validate={[required]}
        />
        <Field
          name={fieldNames.CONFIRM_PASSWORD}
          component={ValidatedInput}
          props={{
            type: 'password',
            label: messages.labelConfirmPassword
          }}
          validate={[required, samePassword]}
        />
        <Button
          type="primary"
          loading
        >
          Submit
          {/* <FormattedMessage {...messages.submit} /> */}
        </Button>
      </form>
    );
  }
}
