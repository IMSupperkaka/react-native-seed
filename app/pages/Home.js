import React from 'react';
import { View } from 'react-native';
import { getHomeList } from '../service/home';

class Home extends React.Component {

  componentDidMount () {
    getHomeList().then((res) => {
      console.warn(res)
    })
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
      </View>
    );
  }
}

export default Home