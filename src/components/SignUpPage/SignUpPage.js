import React from 'react';
import { FormattedMessage } from 'react-intl';

import './SignUpPage.less';

import SignUpForm from '../SignUpForm/SignUpForm';
import messages from './SignUpPage.messages';

const SignUpPage = props => (
  <section className="sign-up-page__wrapper">
    <header className="sign-up-page__header">
      {/* <FormattedMessage {...messages.pleaseSignUp}/> */}
      Please, sign up
    </header>
    <main className="sign-up-page__main">
      <SignUpForm />
    </main>
  </section>
);

export default SignUpPage;
