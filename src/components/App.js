import React from 'react';

import './App.less';

import PageHeader from './PageHeader/PageHeader';
import SignUpPage from './SignUpPage/SignUpPage';

const App = props => (
  <section className="app__wrapper">
    <PageHeader />
    <SignUpPage />
  </section>
);

export default App;
