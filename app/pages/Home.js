import React from 'react';
import { View, StyleSheet, Text, Image, FlatList, TouchableWithoutFeedback } from 'react-native';
import Swiper from 'react-native-swiper';

import { getHomeList } from '../service/home';
import { formatDuration } from '../utils/tools';

class Home extends React.Component {

	state = {
		data: {
			banner: {
				list: []
			},
			today: {
				list: []
			}
		},
		refreshing: false
	};

	componentDidMount() {
		this.getData()
	}

	goDetail = (item) => {
		this.props.navigation.navigate('ActDetail', {
			postid: item.postid,
			image: item.image
		})
	}

	getData = () => {
		this.setState({
			refreshing: true
		})
		getHomeList().then((res) => {
			this.setState({
				refreshing: false
			})
			this.setState({
				data: res.data
			})
		}).catch(() => {
			this.setState({
				refreshing: false
			})
		})
	}



	render() {

		return (
			<FlatList
				style={styles.flatList}
				refreshing={this.state.refreshing}
				onRefresh={this.getData}
				ListHeaderComponent={
					<React.Fragment>
						<View
							style={{
								height: 200
							}}
						>
							<Swiper
								dot={
									<View style={{backgroundColor:'rgba(255, 255, 255, .2)', width: 15, height: 2.5, marginLeft: 5, marginRight: 5}} />
								}
								activeDot={
									<View style={{backgroundColor: 'rgba(255, 255, 255, .8)', width: 15, height: 2.5, marginLeft: 5, marginRight: 5}} />
								}
								paginationStyle={{
									bottom: 10
								}}
								style={styles.wrapper}
								loop
								autoplay
								key={this.state.data.banner.list.length}>
								{
									this.state.data.banner.list.map((banner) => {
										return (
											<View style={styles.slide} key={banner.bannerid}>
												<Image source={{uri: banner.image}} style={styles.slideImg}/>
											</View>
										)
									})
								}
							</Swiper>
						</View>
						<View style={styles.titleContainer}>
							<Text style={styles.title}>今日</Text>
						</View>
						{
							this.state.data.today.list.map((item) => {
								return (
									<TouchableWithoutFeedback onPress={this.goDetail.bind(this, item)}>
										<View key={item.postid} style={styles.todayItem}>
											<Image source={{uri: item.image}} style={styles.todayItemImg}/>
											<View style={styles.todayTitleWrap}>
												<Text style={styles.todayTinyTitle}>
													{item.cates[0].catename} / { formatDuration(item.duration) }
												</Text>
												<Text style={styles.todayTitle}>{ item.title }</Text>
											</View>
										</View>
									</TouchableWithoutFeedback>
								)
							})
						}
					</React.Fragment>
				}
			>

			</FlatList>
		);
	}
}

const styles = StyleSheet.create({
	flatList: {
		backgroundColor: '#000',
		color: '#fff'
	},
	wrapper: {},
	slide: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	slideImg: {
		width: 375,
		height: 200
	},
	titleContainer: {
		textAlign: 'center',
		padding: 15
	},
	title: {
		textAlign: 'center',
		color: '#fff'
	},
	todayItem: {
		
	},
	todayItemImg: {
		width: 375,
		height: 235
	},
	todayTitleWrap: {
		position: 'absolute',
		bottom: 20,
		left: 14
	},
	todayTinyTitle: {
		color: '#fff',
		marginBottom: 8
	},
	todayTitle: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold'
	}
})

export default Home