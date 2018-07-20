import React from 'react';

import './App.less';

import AppHeader from './AppHeader/AppHeader';
import SignUpPage from './SignUpPage/SignUpPage';

const App = () => (
  <section className="app__wrapper">
    <AppHeader />
    <SignUpPage />
  </section>
);

export default App;
