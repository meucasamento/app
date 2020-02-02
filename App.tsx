import React, { useState } from 'react';
import Routes from './src/routes'
import { Provider } from 'react-redux'

import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import configureStore from './src/redux'

const store = configureStore()

const fetchFonts = () => {
  return Font.loadAsync({
  'Montserrat': require('./assets/fonts/Montserrat-Regular.ttf'),
  'Montserrat Black': require('./assets/fonts/Montserrat-Black.ttf'),
  'Montserrat Bold': require('./assets/fonts/Montserrat-Bold.ttf')
  })
}

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false)

  if(!dataLoaded) {
    return (
      <AppLoading 
      startAsync={fetchFonts}
      onFinish={() => setDataLoaded(true)}/>
    )
  }

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}
