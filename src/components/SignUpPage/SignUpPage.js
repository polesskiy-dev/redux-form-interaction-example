import React from 'react';
import Card from 'antd/lib/card';
import { FormattedMessage } from 'react-intl';

import './SignUpPage.less';

import SignUpForm from '../SignUpForm/SignUpForm';
import messages from './SignUpPage.messages';

const SignUpPage = props => (
  <section>
    <Card title={
      <header>
        {/* <FormattedMessage {...messages.pleaseSignUp}/> */}
      Please, sign up yourself
      </header>
    }>
      <SignUpForm />
    </Card>
  </section>
);

export default SignUpPage;
