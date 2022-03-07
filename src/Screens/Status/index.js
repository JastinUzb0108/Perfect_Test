import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';

import { McText } from 'Components'
import TopHeader from 'Helper'
const { width, height } = Dimensions.get('window');

const data = [
    {
        title: 'Simple',
        price: '26, 000',
        services: [
            {
                title: 'Grammar and repitition tests'
            },
            {
                title: 'Use with commercials'
            },
            {
                title: 'Check writing'
            }
        ]
    },
    {
        title: 'Medium',
        price: '32, 000',
        services: [
            {
                title: 'Grammar and repitition tests'
            },
            {
                title: 'Category course'
            },
            {
                title: 'Check writing'
            },
            {
                title: 'Use without advertising'
            }
        ]
    },
    {
        title: 'Gold',
        price: '56, 000',
        services: [
            {
                title: 'Free grammar and repitition  \t tests'
            },
            {
                title: 'Category course'
            },
            {
                title: 'Full IELTS course'
            },
            {
                title: 'Check writing'
            },
            {
                title: 'Use without advertising'
            }
        ]
    }
]

const Status = ({ animatedStyle, navigation }) => {
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

                <View style={styles.servicesContainer}>
                    <ScrollView style={{
                        flex: 1,
                        marginBottom: 30,
                        paddingHorizontal: 26,
                    }}
                        persistentScrollbar={true}
                    >
                        {
                            data?.map((item, index) => {
                                return (
                                    <View key={index} style={[styles.servicesBox, {
                                        borderColor: `${theme.colors.primary}`
                                    }]}>
                                        <View style={styles.title}>
                                            <McText bold size={20} color={theme.colors.text1}>{item.title}</McText>
                                        </View>
                                        <View style={styles.servicesItem}>
                                            {
                                                item.services?.map((itemServices, indexServices) => {
                                                    return (
                                                        <McText
                                                            key={indexServices}
                                                            semi size={18}
                                                            color={theme.colors.text2}
                                                            style={{
                                                                marginBottom: 3
                                                            }}
                                                        >
                                                            * {itemServices.title}
                                                        </McText>
                                                    )
                                                })
                                            }
                                        </View>
                                        <View style={styles.priceItem}>
                                            <McText bold size={20} color={theme.colors.text1}>
                                                Price:  {item.price}
                                            </McText>
                                        </View>
                                        <View style={{
                                            width: '100%',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            marginVertical: 8
                                        }}>
                                            <TouchableOpacity
                                                style={styles.button}
                                                onPress={() => {
                                                    console.log(item.price);
                                                }}>
                                                <McText medium size={20} color={theme.colors.text1}>
                                                    Active now
                                                </McText>
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                )
                            })
                        }
                    </ScrollView>
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
    servicesContainer: {
        width: '100%',
        height: height - 50,
        alignItems: 'center',
        marginVertical: 30
    },
    servicesBox: {
        width: 300,
        padding: 20,
        borderRadius: 20,
        borderWidth: 2,
        marginVertical: 15
    },
    title: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 7
    },
    button: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#FFAC30'
    },
    priceItem: {
        margin: 10
    }
})

export default Status;
