import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import GuestsScreen from './screens/GuestsScreen'
import ProfileScreen from './screens/ProfileScreen'

const AppNavigator = createStackNavigator(
  {
    Guests: GuestsScreen
  },
  {
    initialRouteName: 'Guests'
  }
)


export default createAppContainer(AppNavigator)