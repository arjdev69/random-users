import React from 'react'
import ReactDOM from 'react-dom'

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import '@/config/ReactotronConfig';

import { store, persistor } from '@/store';

import Home from '@/pages/home'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Home />,
      </PersistGate>
  </Provider>,
  document.getElementById('main')
)