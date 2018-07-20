import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from 'antd/lib/button';
import { Field, reduxForm } from 'redux-form';

import './SignUpForm.less';

import EInput from '../form-elements/EInput/EInput';
import ECountrySelect from '../form-elements/ECountrySelect/ECountrySelect';
import messages from './SignUpForm.messages';
import { initialValues, fieldNames, SIGN_UP_FORM_NAME } from './SignUpForm.config';
import { required, email, samePassword, has4Length } from '../../validation';
import { signUpRequest } from '../../ducks/sign-up.duck';

@reduxForm({
  form: SIGN_UP_FORM_NAME,
  initialValues
})
export default class SignUpForm extends PureComponent {

  static propTypes = {
    valid: PropTypes.bool,
    submitting: PropTypes.bool,
    dispatch: PropTypes.func
  };

  handleSubmit = () => this.props.dispatch(signUpRequest());

  render() {
    const { valid, submitting } = this.props;

    return (
      <form className="sign-up-form__wrapper">
        <div className="row">
          <div className="alignment-column col-sm-full col-lg-full">
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
              name={fieldNames.PASSWORD}
              component={EInput}
              props={{
                type: 'password',
                label: messages.labelPassword
              }}
              validate={[required, has4Length]}
            />
            <Field
              name={fieldNames.CONFIRM_PASSWORD}
              component={EInput}
              props={{
                type: 'password',
                label: messages.labelConfirmPassword
              }}
              validate={[required, samePassword, has4Length]}
            />
          </div>
        </div>

        <footer className="sign-up-form__footer">
          <Button
            type="primary"
            size="large"
            disabled={!valid || submitting}
            loading={submitting}
            onClick={this.handleSubmit}
          >
          Submit
          </Button>
        </footer>
      </form>
    );
  }
}
