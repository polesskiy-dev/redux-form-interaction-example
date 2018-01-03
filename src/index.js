import React from 'react';
import { createEpicMiddleware } from 'redux-observable'
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';

import rootReducer from './reducer.root';
import rootEpic from './epic.root';
import App from './components/App';

// store initial state
const initialState = {};
const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(epicMiddleware))
);

render(
  <Provider store={store}>
    <IntlProvider locale="en">
      <App />
    </IntlProvider>
  </Provider>,
  document.getElementById('app')
);
