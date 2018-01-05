import React from 'react';
import { FormattedMessage } from 'react-intl';

import './SignUpPage.less';

import SignUpForm from '../SignUpForm/SignUpForm';
import messages from './SignUpPage.messages';

const SignUpPage = props => (
  <section>
    <header className="sign-up__header">
      {/* <FormattedMessage {...messages.pleaseSignUp}/> */}
      Please, sign up yourself
    </header>
    <main className="sign-up__main">
      <SignUpForm />
    </main>
  </section>
);

export default SignUpPage;
