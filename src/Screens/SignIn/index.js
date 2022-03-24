import React, { useState, useContext } from 'react'
import { View, Dimensions, TextInput, StyleSheet } from 'react-native'

import { useTheme } from 'styled-components/native'
import { McText, McImage } from 'Components'
import { Images } from 'Constants'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userLogin } from 'Api'
import { GlobalState } from 'Config'

const { width, height } = Dimensions.get('window');

const SignIn = ({ navigation }) => {
    const [data, setData] = useState({
        password: "",
        username: "",
    })

    const theme = useTheme()

    const state = useContext(GlobalState)
    const [clocks] = state.clocks
    const [week] = state.week
    const [token, setToken] = state.token
    const [loading, setLoading] = state.loading

    const setItemToken = async (item) => {
        try {
            await AsyncStorage.setItem('token', item)
            setToken(true)
        } catch (err) {
            console.log(err);
        }
    }

    const onSubmitData = async () => {
        userLogin({ data })
            .then((res) => {
                setItemToken(res.data.token)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <View>
            <View style={{
                flexDirection: 'row'
            }}>
                <McImage source={Images.color_bar} style={{
                    height: height
                }} />
                <View style={{
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
                        <TextInput
                            onChangeText={(text) => {
                                setData({ ...data, username: text })
                            }}
                            style={[styles.inputStyle, {
                                borderColor: theme.colors.primary,
                                color: theme.colors.text1
                            }]}
                            value={data.username}
                            placeholderTextColor={theme.colors.text3}
                            placeholder='User Name'
                        />

                        <TextInput
                            onChangeText={(text) => {
                                setData({ ...data, password: text })
                            }}
                            style={[styles.inputStyle, {
                                borderColor: theme.colors.primary,
                                color: theme.colors.text1
                            }]}
                            value={data.password}
                            placeholderTextColor={theme.colors.text3}
                            placeholder='User Password'
                            secureTextEntry={true}
                        />

                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Home')
                                onSubmitData()
                                setLoading(true)
                            }}
                            style={{
                                width: 220,
                                height: 50,
                                marginTop: 10,
                                borderRadius: 10,
                                backgroundColor: theme.colors.primary,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <McText semi size={16} color="#212330">
                                Sign In
                            </McText>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <View style={{
                            alignContent: 'space-between',
                            width: 210
                        }}>
                            <McText
                                medium size={14}
                                color={theme.colors.text3}
                                style={{
                                    lineHeight: 22
                                }} >
                                Open An Accaunt For Digital E-Wallet Solution Instant Payouts
                            </McText>
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('SignUp')
                            }}
                            style={{
                                height: 46,
                                width: 216,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 20,
                                borderWidth: 2,
                                borderColor: theme.colors.primary,
                                borderRadius: 10
                            }}>
                            <McText semi size={16} color={theme.colors.text1} >
                                CreateAccaunts
                            </McText>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        width: 216,
        height: 46,
        marginTop: 10,
        borderRadius: 10,
        borderWidth: 2,
        paddingHorizontal: 8,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default SignIn
