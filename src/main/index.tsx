import React from 'react'
import ReactDOM from 'react-dom'

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import '@/config/ReactotronConfig';

import { store, persistor } from '@/store';

import Home from '@/pages/home'
import { Header } from '@/components';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Header title={"Random Users"} />
      <Home />
      </PersistGate>
  </Provider>,
  document.getElementById('main')
)