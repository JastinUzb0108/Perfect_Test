import React, { useContext, useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'
import Animated from 'react-native-reanimated'
import { McText, McImage } from 'Components'
import { Images } from 'Constants'

import {
    Home,
    Tests,
    RepitionTest,
    GrammaryTest,
    Lessons,
    Status,
    Settings,
    Question,
    Help,
    Marketing
} from 'Screens'
import {GlobalState} from 'Config' 

const Drawer = createDrawerNavigator();
const menus = [
    {
        name: 'Dashboard',
        label: 'Home'
    },
    {
        name: 'Tests',
        label: 'Tests'
    },
    {
        name: 'Lessons',
        label: 'Lessons'
    },
    {
        name: 'Status',
        label: 'Status'
    },
    {
        name: 'Settings',
        label: 'Setting'
    },
    {
        name: 'Question',
        label: 'Question'
    },
    {
        name: 'Marketing',
        label: 'Marketing'
    },
    {
        name: 'Help',
        label: 'Help'
    },
]

const CustomDrawerContent = ({ navigation, theme }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const state = useContext(GlobalState)
    const [token, setToken] = state.token
    const logout = async () => {
        try {
            await AsyncStorage.removeItem('token')
            setToken(false)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <View style={{
            flex: 1
        }}>
            {/* Header */}
            <View style={{
                width: 210,
                height: 107,
                borderBottomEndRadius: 107 / 2,
                backgroundColor: theme.colors.background,
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        width: 44,
                        height: 44,
                        borderRadius: 22,
                        backgroundColor: theme.colors.boxBackground,
                        marginRight: 10
                    }}>
                        <McImage source={Images.avatarUser1} style={{
                            width: 44,
                            height: 44,
                            borderRadius: 22
                        }} />
                    </View>
                    <View>
                        <McText semi size={16} color={theme.colors.text1}>Carol Black</McText>
                        <McText medium size={10} color={theme.colors.text1}>Seattle, Washington</McText>
                    </View>
                </View>

            </View>

            {/* DrawerItems */}
            <DrawerContentScrollView
                scrollEnabled={false}
                contentContainerStyle={{}}
                style={{
                    marginLeft: -18,

                }}
            >
                {menus?.map((menu, index) => {
                    return (
                        <DrawerItem
                            activeTintColor={theme.colors.boxBackground}
                            focused={activeIndex === index}
                            onPress={() => {
                                navigation.navigate(menu.name)
                                setActiveIndex(index)
                            }}
                            key={index}
                            label={({ focused }) => {
                                return (
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center'
                                    }}>
                                        <View style={{
                                            width: 4,
                                            height: 33,
                                            marginRight: 26,
                                            backgroundColor: focused ? theme.colors.primary : 'transparent'
                                        }}></View>
                                        <McText
                                            size={16}
                                            bold={focused}
                                            color={theme.colors.text1}
                                        >
                                            {menu.label}
                                        </McText>
                                    </View>
                                )
                            }}
                        >

                        </DrawerItem>
                    )
                })}
            </DrawerContentScrollView>

            {/* Footer */}
            <View style={{ marginBottom: 27, marginLeft: 30 }}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.closeDrawer()
                        navigation.navigate('Home')
                        logout()
                    }}
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                    }}>
                    <McImage
                        source={Images.logout}
                        style={{
                            tintColor: theme.colors.text2,
                            marginRight: 8,
                        }} />
                    <McText bold size={16} color={theme.colors.text2}>Logout</McText>
                </TouchableOpacity>
                <View style={{ marginTop: 42 }}>
                    <McText medium size={10} color={theme.colors.text2}>Vertion 2.0.1</McText>
                </View>
            </View>
        </View>
    )
}

const DrawerMenu = () => {
    const [progress, setProgress] = useState(new Animated.Value(0))
    const theme = useTheme()

    const scale = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [1, 0.75]
    })

    const rotate = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: ['0deg', '-10deg']
    })

    const borderRadius = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [1, 30]
    })

    const animatedStyle = {
        borderRadius, transform: [{ scale, rotateZ: rotate }]
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: theme.colors.boxBackground
        }}>
            <Drawer.Navigator
                screenOptions={{
                    drawerHideStatusBarOnOpen: true,
                    drawerType: 'slide',
                    drawerStatusBarAnimation: 'slide',
                    overlayColor: 'transparent',
                    drawerStyle: {
                        flex: 1,
                        width: '60%',
                        backgroundColor: 'transparent',
                    },
                    sceneContainerStyle: {
                        backgroundColor: 'transparent'
                    },

                }}
                initialRouteName='Home'
                drawerContent={(props) => {
                    setTimeout(() => {
                        setProgress(props.progress)
                    }, 0)

                    return (
                        <CustomDrawerContent
                            navigation={props.navigation}
                            theme={theme}
                        />
                    )
                }}
            >
                <Drawer.Screen name='Dashboard'
                    options={{
                        headerShown: false
                    }}>
                    {(props) => <Home {...props} animatedStyle={animatedStyle} />}
                </Drawer.Screen>
                <Drawer.Screen name='Tests'
                    options={{
                        headerShown: false
                    }}>
                    {(props) => <Tests {...props} animatedStyle={animatedStyle} />}
                </Drawer.Screen>
                <Drawer.Screen name='GrammaryTest'
                    options={{
                        headerShown: false
                    }}>
                    {(props) => <GrammaryTest {...props} animatedStyle={animatedStyle} />}
                </Drawer.Screen>
                <Drawer.Screen name='RepitionTest'
                    options={{
                        headerShown: false
                    }}>
                    {(props) => <RepitionTest {...props} animatedStyle={animatedStyle} />}
                </Drawer.Screen>
                <Drawer.Screen name='Lessons'
                    options={{
                        headerShown: false
                    }}>
                    {(props) => <Lessons {...props} animatedStyle={animatedStyle} />}
                </Drawer.Screen>
                <Drawer.Screen name='Status'
                    options={{
                        headerShown: false
                    }}>
                    {(props) => <Status {...props} animatedStyle={animatedStyle} />}
                </Drawer.Screen>
                <Drawer.Screen name='Settings'
                    options={{
                        headerShown: false
                    }}>
                    {(props) => <Settings {...props} animatedStyle={animatedStyle} />}
                </Drawer.Screen>
                <Drawer.Screen name='Question'
                    options={{
                        headerShown: false
                    }}>
                    {(props) => <Question {...props} animatedStyle={animatedStyle} />}
                </Drawer.Screen>
                <Drawer.Screen name='Help'
                    options={{
                        headerShown: false
                    }}>
                    {(props) => <Help {...props} animatedStyle={animatedStyle} />}
                </Drawer.Screen>
                <Drawer.Screen name='Marketing'
                    options={{
                        headerShown: false
                    }}>
                    {(props) => <Marketing {...props} animatedStyle={animatedStyle} />}
                </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    )
}

export default DrawerMenu