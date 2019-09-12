import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import TopTabBar from './components/TopTabBar';

import Home from './pages/Home';
import Detail from './pages/Detail';

const AppNavigator = createMaterialTopTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: '发现'
    })
  },
  Detail: {
    screen: Detail,
    navigationOptions: ({ navigation }) => ({
      title: '频道'
    })
  }
}, {
  initialRouteName: 'Home',
  tabBarComponent: props => (
    <TopTabBar {...props}/>
  )
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}