import React from 'react';
import { View, StyleSheet, Text, Image, FlatList, SectionList } from 'react-native';
import Video from 'react-native-video';

import { getHomeList } from '../service/home';

class ActDetail extends React.Component {

	state = {
		data: {
			
		}
	};

	componentDidMount() {
		this.getData()
	}

	getData = () => {
		getHomeList().then((res) => {
			this.setState({
				data: res.data
			})
		})
	}

	videoError = (err) => {
		console.warn
		
		(err)
	}

	render() {

		return (
			<View>
				<Video source={{uri: "https://qiniu-xpc9.vmoviercdn.com/5d7f08c392c2d.mp4"}}   // Can be a URL or a local file.
					ref={(ref) => {
						this.player = ref
					}}
					controls={true}
					onError={this.videoError}
					resizeMode="contain"
					style={{
						...styles.backgroundVideo
					}} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	backgroundVideo: {
		height: 200,
		backgroundColor: '#000'
	}
})

export default ActDetail