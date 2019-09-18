import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import TopTabBar from './components/TopTabBar';

import Home from './pages/Home';
import Detail from './pages/Detail';
import ActDetail from './pages/ActDetail';

const Main = createMaterialTopTabNavigator({
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
	},
	Find: {
		screen: Detail,
		navigationOptions: ({ navigation }) => ({
			title: '我的'
		})
	}
}, {
	initialRouteName: 'Home',
	tabBarComponent: props => (
		<TopTabBar {...props} />
	),
	swipeEnabled: false,
});

const AppNavigator = createStackNavigator({
	Main: {
		screen: Main,
		navigationOptions: ({ navigation }) => ({
			header: null
		})
	},
	ActDetail: {
		screen: ActDetail,
		navigationOptions: ({ navigation }) => ({
			header: null
		})
	}
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
	render() {
		return (
			<SafeAreaView style={styles.safeArea}>
				<AppContainer />
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: '#000'
	}
})