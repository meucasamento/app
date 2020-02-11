import React from 'react';
import Routes from './src/navigation/routes'
import { Provider } from 'react-redux'
import { setTopLevelNavigator } from './src/services/navigation.service'

import store from './src/store'

export default function App() {
  return (
    <Provider store={store}>
      <Routes ref={ref => setTopLevelNavigator(ref)} />
    </Provider>
  )
}
