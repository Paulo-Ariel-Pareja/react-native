import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import UsersScreen from './screens/Users'
import PostScreen from './screens/Posts'
import DetailScreen from './screens/Details'

const AppNavigator = createStackNavigator({
  Users: {
    screen: UsersScreen
  },
  Posts: {
    screen: PostScreen
  },
  Detail: {
    screen: DetailScreen
  }
}, {
  initialRouteName: 'Users'
})

export default createAppContainer(AppNavigator)
