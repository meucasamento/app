import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import HomeScreeen from './screens/HomeScreen'
import GuestsScreen from './screens/GuestsScreen'

const HomeStack = createStackNavigator({
  Home: HomeScreeen
}, {
  navigationOptions: {  
    tabBarLabel: 'Casamento'
  },
  defaultNavigationOptions: {
    headerStyle: {
      borderBottomWidth: 0
    }
  }
})

const GuestStack = createStackNavigator({
  Guests: GuestsScreen
}, {
  navigationOptions: {
    tabBarLabel: "Convidados"
  },
  defaultNavigationOptions: {
    headerStyle: {
      borderBottomWidth: 0
    }
  }
})

const App = createBottomTabNavigator({
  Home: HomeStack,
  Guests: GuestStack
},
{
  tabBarOptions: {
    activeTintColor: "black",
    inactiveTintColor: "gray"
  }
})

export default createAppContainer(App)