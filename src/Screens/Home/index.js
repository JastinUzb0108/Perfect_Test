import React from 'react';
import { View, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import Animated from 'react-native-reanimated';
import styled, { useTheme } from 'styled-components/native';

import { McText, McImage } from 'Components'
import TopHeader from 'Helper'
import { Images } from 'Constants'
import { dummyData } from 'Mock'

const Home = ({ animatedStyle, navigation }) => {
    const theme = useTheme();

    return (
        <Animated.View
            style={{
                flex: 1,
                backgroundColor: theme.colors.background,
                ...animatedStyle
            }}
        >
            {/* Header */}
            <TopHeader onPress={() => {
                navigation.openDrawer();
            }} />

            <ScrollView>
                {/* Accaunt Overview */}
                <HeaderSction style={{ marginTop: 50 }}>
                    <McText semi size={16} color={theme.colors.text2}>
                        Accaunt Overview
                    </McText>
                </HeaderSction>
                <View style={{
                    marginHorizontal: 25,
                    marginTop: 20,
                    height: 116,
                    backgroundColor: theme.colors.boxBackground,
                    borderRadius: 12,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <View style={{
                        marginLeft: 25
                    }}>
                        <McText semi size={24} color={theme.colors.text1} style={{
                            lineHeight: 30,
                            marginBottom: 8
                        }}>20,600</McText>
                        <McText size={24} color={theme.colors.text3} >Current balance</McText>
                    </View>
                    <TouchableOpacity style={{
                        width: 48,
                        height: 48,
                        borderRadius: 24,
                        backgroundColor: theme.colors.primary,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: 25
                    }}>
                        <McImage source={Images.plus} />
                    </TouchableOpacity>
                </View>

                {/* <View>
                <FlatList
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={dummyData.SendMoneyRecords}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{
                                marginTop: 20,
                                marginLeft: index === 0 ? 25 : 0,
                                marginRight: index === dummyData.SendMoneyRecords.length - 1 ? 0 : 10
                            }}>
                                {index === 0 ? (
                                    <TouchableOpacity style={{
                                        width: 52,
                                        height: 120,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <View style={{
                                            width: 52,
                                            height: 52,
                                            borderRadius: 26,
                                            backgroundColor: theme.colors.primary,
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <McImage source={item.img} />
                                        </View>
                                    </TouchableOpacity>
                                ) : (
                                    <View style={{
                                        width: 110,
                                        height: 120,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: theme.colors.boxBackground,
                                        borderRadius: 12
                                    }}>
                                        <View style={{
                                            width: 42,
                                            height: 42,
                                            borderRadius: 21,
                                            borderWidth: 1,
                                            borderColor: 'rgba(58, 66, 118, 0.2)',
                                            backgroundColor: theme.colors.boxBackground,
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }} >
                                            <McImage source={item.avatar} />
                                        </View>
                                        <McText size={16} color={theme.colors.text3} style={{
                                            marginTop: 16
                                        }}>{item.name}</McText>
                                    </View>
                                )}
                            </View>
                        )
                    }}
                />
            </View> */}

                {/* Services */}
                <HeaderSction style={{ marginTop: 40 }}>
                    <McText semi size={16} color={theme.colors.text2}>
                        Services
                    </McText>
                    <McImage source={Images.filter}
                        style={{
                            width: 24,
                            height: 24,
                            tintColor: theme.colors.text2
                        }}
                    />
                </HeaderSction>

                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: 25,
                    }}>
                    {
                        dummyData.Lessons?.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate(item.name)
                                    }}
                                    key={item.id}
                                    style={{
                                        width: 82,
                                        paddingVertical: 7,
                                        paddingHorizontal: 2,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: 10,
                                        borderWidth: 1.5,
                                        borderColor: '#FFAC30',
                                        marginTop: 10
                                    }}
                                >
                                    <McImage
                                        source={item.img}
                                        style={{
                                            width: 40,
                                            height: 40
                                        }}
                                    />
                                    <McText
                                        semi
                                        size={10}
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
            </ScrollView>
        </Animated.View>
    );
};

const HeaderSction = styled.View`
    margin: 0px 25px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export default Home;
