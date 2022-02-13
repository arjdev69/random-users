import React from 'react'
import ReactDOM from 'react-dom'

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import '@/config/ReactotronConfig';

import { store, persistor } from '@/store';

import Router from '@/routes/Router'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router />
      </PersistGate>
  </Provider>,
  document.getElementById('main')
)