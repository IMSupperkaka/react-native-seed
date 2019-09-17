import React from 'react';
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback, UIManager, findNodeHandle, PixelRatio } from 'react-native';

class TopTabBar extends React.Component {
    state = {
        translateX: new Animated.Value(0),
        width: 0,
        tabRef: []
    }

    onLayout = () => {
        UIManager.measure(findNodeHandle(this.state.tabRef[0]),(x,y,width,height,pageX,pageY)=>{
            this.state.translateX.setValue(pageX)
            this.setState({
                width: width
            })
        })
    }

    shouldComponentUpdate (nextProps) {
        const { navigation: { state: { index: activeIndex } } } = this.props;
        const { navigation: { state: { index: nextActiveIndex } } } = nextProps;

        if (activeIndex !== nextActiveIndex) {
            UIManager.measure(findNodeHandle(this.state.tabRef[nextActiveIndex]),(x,y,width,height,pageX,pageY)=>{
                Animated.parallel([
                    Animated.timing(this.state.translateX, {
                        toValue: pageX,
                        duration: 200,
                        useNativeDriver: true
                    })
                ]).start();
            })
        }

        return true;
    }

    render() {
        const { onTabPress, getLabelText, navigation: { state: { routes, index: activeIndex } } } = this.props;
        let { translateX, scaleX, width } = this.state;
        return (
            <View style={styles.tabBar} onLayout={this.onLayout}>
                <View>

                </View>
                {
                    routes.map((route, index) => {
                        const focused = index === activeIndex;
                        const labelStyle = focused ? styles.labelActive : styles.labelDefault;
                        const label = getLabelText({ route });
                        return (
                            (
                                <TouchableWithoutFeedback
                                    ref={(ref)=>this.state.tabRef[index]=ref}
                                    onPress={() => onTabPress({ route })}
                                    >
                                    <Animated.Text style={[ labelStyle, styles.labelBase ]}>{label}</Animated.Text>
                                </TouchableWithoutFeedback>
                            )
                        )
                    })
                }
                <Animated.View style={{
                    ...styles.bottomLine,
                    width: width,
                    transform: [
                        {translateX: translateX}
                    ]
                }}>

                </Animated.View>
                <View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 44,
        backgroundColor: '#121212',
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: 'rgba(255, 255, 255, 0.5)'
    },
    labelBase: {
        lineHeight: 44
    },
    labelDefault: {
        color: '#7b7b7b'
    },
    labelActive: {
        color: '#fff'
    },
    bottomLine: {
        position: 'absolute',
        height: 2,
        backgroundColor: '#fff',
        bottom: 0
    }
})

export default TopTabBar 