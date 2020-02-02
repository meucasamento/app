import React, { useState } from 'react';
import Routes from './src/routes'
import { Provider } from 'react-redux'

import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import configureStore from './src/redux'

const store = configureStore()

const fetchFonts = () => {
  return Font.loadAsync({
  'Open Sans': require('./assets/fonts/Open-Sans.ttf')
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
