import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'

import HomeScreeen from './screens/HomeScreen'
import GuestsScreen from './screens/GuestsScreen'

const HomeStack = createStackNavigator({
  Home: HomeScreeen
}, {
  navigationOptions: {  
    tabBarLabel: 'Casamento',
    tabBarIcon: ({tintColor}) => (
      <Icon
          name="star"
          color={tintColor}
          size={24}
      />
    )
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
    tabBarLabel: "Convidados",
    tabBarIcon: ({tintColor}) => (
      <Icon
          name="user"
          color={tintColor}
          size={24}
      />
    )
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