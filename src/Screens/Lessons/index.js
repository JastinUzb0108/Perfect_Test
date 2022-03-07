import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';

import { McText, McImage } from 'Components'
import { dummyData } from 'Mock'
import TopHeader from 'Helper'


const Lessons = ({ animatedStyle, navigation }) => {
    const theme = useTheme();
    return (
        <Animated.View
            style={{
                flex: 1,
                backgroundColor: theme.colors.background,
                ...animatedStyle
            }}
        >
            <View>

                <TopHeader onPress={() => {
                    navigation.openDrawer();
                }} />

                <View style={styles.container}>
                    {
                        dummyData.Lessons?.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate(item.name)
                                    }}
                                    key={item.id}
                                    style={styles.box}
                                >
                                    <McImage
                                        source={item.img}
                                        style={styles.imgStyle}
                                    />
                                    <McText
                                        semi
                                        size={14}
                                        color={theme.colors.text1}
                                        style={{
                                            marginTop: 5
                                        }}
                                    >
                                        {item.label}
                                    </McText>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    headContainer: {
        marginHorizontal: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    container: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 25,
        marginTop: 10
    },
    imgStyle: {
        width: 100,
        height: 100
    },
    box: {
        width: 155,
        paddingVertical: 7,
        paddingHorizontal: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: '#FFAC30',
        marginTop: 10
    }
})

export default Lessons;
