import React from 'react';

import './App.less';

import PageHeader from './PageHeader/PageHeader';
import SignUpForm from './SignUpForm/SignUpForm';

const App = props => (
  <section>
    <PageHeader />
    <SignUpForm />
  </section>
);

export default App;
