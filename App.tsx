import React from 'react';
import Routes from './src/routes'
import { Provider } from 'react-redux'

import configureStore from './src/redux'

const store = configureStore()

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}
