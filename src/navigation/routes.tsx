import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'

import AuthenticationScreen from '../screens/Authentication'
import HomeScreeen from '../screens/Home'
import GuestsScreen from '../screens/Guest'
import NewGuestScreen from '../screens/NewGuest'
import ProfileScreen from '../screens/Profile'

const iconSize = 22

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreeen,
    navigationOptions: () => ({
      title: 'Casamento'
    })
  },
}, {
  navigationOptions: {
    tabBarLabel: 'Casamento',
    tabBarIcon: ({tintColor}) => (
      <Icon
          name="star"
          color={tintColor}
          size={iconSize}/>
    )
  },
  defaultNavigationOptions: {
    headerStyle: {
      borderBottomWidth: 0
    }
  }
})

const GuestStack = createStackNavigator({
  Guests: {
    screen: GuestsScreen,
    navigationOptions: () => ({
      title: "Convidados",
      headerBackTitle: null
    })
  },
  NewGuest: {
    screen: NewGuestScreen,
    navigationOptions: () => ({
      title: "Convidado",
    })
  }
}, {
  headerMode: "screen",
  navigationOptions: {
    tabBarLabel: "Convidados",
    tabBarIcon: ({tintColor}) => (
      <Icon
          name="users"
          color={tintColor}
          size={iconSize}
      />
    )
  },
  defaultNavigationOptions: {
    headerStyle: {
      borderBottomWidth: 0
    }
  }
})

const ProfileStack = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: () => ({
      title: "Perfil"
    })
  }
}, {
  navigationOptions: {
    tabBarLabel: "Perfil",
    tabBarIcon: ({tintColor}) => (
      <Icon
          name="user"
          color={tintColor}
          size={iconSize}
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
  Guests: GuestStack,
  Profile: ProfileStack
},
{
  tabBarOptions: {
    activeTintColor: "black",
    inactiveTintColor: "gray",
  },
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarVisible: navigation.state.index === 0
  })
})

const switchNavigation = createSwitchNavigator(
  {
    Auth: {
      screen: AuthenticationScreen,
    },
    App: {
      screen: App
    }
  },
  {
    initialRouteName: "Auth"
  }
)

export default createAppContainer(switchNavigation)