import React from 'react';
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from 'react-native';

class TopTabBar extends React.Component {

    render() {
        const { onTabPress, getLabelText, navigation: { state: { routes, index: activeIndex } } } = this.props;

        return (
            <View style={styles.tabBar}>
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
                                    onPress={() => onTabPress({ route })}
                                    >
                                    <Animated.Text style={labelStyle}>{label}</Animated.Text>
                                </TouchableWithoutFeedback>
                            )
                        )
                    })
                }
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
        height: 40,
        padding: 20,
        backgroundColor: '#121212',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.8)'
    },
    labelDefault: {
        color: '#7b7b7b'
    },
    labelActive: {
        color: '#fff'
    }
})

export default TopTabBar 