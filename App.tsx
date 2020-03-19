import React from 'react';
import Routes from './src/navigation/routes'
import { Provider } from 'react-redux'
import { setTopLevelNavigator } from './src/services/navigation.service'
import { registerAllAxiosMiddlewares } from './src/middlewares/Axios'

import store from './src/store'

export default function App() {
  registerAllAxiosMiddlewares()

  return (
    <Provider store={store}>
      <Routes ref={ref => setTopLevelNavigator(ref)} />
    </Provider>
  )
}
