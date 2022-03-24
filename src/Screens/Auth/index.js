import React, { useContext } from 'react'
import { View, TouchableOpacity, Dimensions } from 'react-native'
import { useTheme } from 'styled-components'
import { GlobalState } from 'Config'
import { Bars } from 'react-native-loader';

const { width, height } = Dimensions.get('window');
import { useThemeContext } from 'Themes'
import { McText, McImage } from 'Components'
import { Images } from 'Constants'

const Dashboard = ({ navigation }) => {
    const theme = useTheme()
    const themeContext = useThemeContext();

    const state = useContext(GlobalState)
    const [clocks] = state.clocks
    const [week] = state.week
    const [loading] = state.loading

    if (loading) {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.colors.background,
            }}>
                <View>
                    <Bars size={50} color={theme.colors.success} />
                    <McText size={24} bold color={theme.colors.text3}>Loading...</McText>
                </View>
            </View>
        )
    }

    return (
        <View>
            <View style={{
                flexDirection: 'row'
            }}>
                <McImage source={Images.color_bar} style={{
                    height: height
                }} />
                <View
                    style={{
                        marginHorizontal: 26,
                        marginBottom: 53,
                        justifyContent: 'space-between'
                    }}>

                    <View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>

                            <McText medium size={24} color={theme.colors.text1}>{clocks}</McText>
                        </View>
                        <McText medium size={13} color={theme.colors.text3} style={{
                            marginTop: 7
                        }}>
                            {week}
                        </McText>
                    </View>

                    <View>
                        <McImage source={Images.logo} />
                        <McText secondary size={28} color={theme.colors.text1} style={{
                            marginTop: 16
                        }}>eWallet</McText>
                        <View style={{
                            alignContent: 'space-between',
                            height: 110,
                            width: 189
                        }}>
                            <McText
                                medium size={14}
                                color={theme.colors.text3}
                                style={{
                                    marginTop: 16,
                                    lineHeight: 22
                                }} >
                                Open An Accaunt For Digital E-Wallet Solution.Instant Payouts
                            </McText>
                            <McText medium size={14} color={theme.colors.text3} style={{
                                marginTop: 16
                            }}>Join For Free</McText>
                        </View>
                    </View>

                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('SignIn')
                            }}
                            style={{
                                height: 50,
                                width: 190,
                                borderRadius: 10,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderColor: theme.colors.primary,
                                borderWidth: 2,
                            }}>
                            <McText semi size={16} color={theme.colors.text1} >
                                Sign In
                            </McText>
                            <McImage source={Images.right_arrow} style={{
                                marginLeft: 8
                            }} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('SignUp')
                            }}
                            style={{
                                height: 50,
                                width: 188,
                                borderRadius: 10,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: theme.colors.primary,
                                marginTop: 15
                            }}>
                            <McText semi size={16} color={theme.colors.text2} >
                                Create Accaunts
                            </McText>
                            <McImage source={Images.right_arrow} style={{
                                marginLeft: 8
                            }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Dashboard
