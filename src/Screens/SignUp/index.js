import React, { useState, useContext } from 'react'
import { View, Dimensions, TextInput, StyleSheet } from 'react-native'

import { useTheme } from 'styled-components/native'
import { McText, McImage } from 'Components'
import { Images } from 'Constants'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userRegister } from 'Api'
import { GlobalState } from 'Config'

const { width, height } = Dimensions.get('window');

const SignUp = ({ navigation }) => {
    const [data, setData] = useState({
        password: "",
        username: "",
        name: "",
        phone_number: "",
        phone_id: "AKSdkajsbdjakdbadadajdA_d0asdaksjdn"
    })

    const theme = useTheme()

    const state = useContext(GlobalState)
    const [clocks] = state.clocks
    const [week] = state.week
    const [token, setToken] = state.token

    const onSubmitData = async () => {
        userRegister({ data })
            .then(async (res) => {
                try {
                    await AsyncStorage.setItem('token', res.data.token)
                    setToken(res.data.token)
                } catch (err) {
                    console.log(err);
                }
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
                                setData({ ...data, name: text })
                            }}
                            style={[styles.inputStyle, {
                                borderColor: theme.colors.primary,
                                color: theme.colors.text1
                            }]}
                            value={data.name}
                            placeholderTextColor={theme.colors.text3}
                            placeholder=' Name'
                        />
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
                                setData({ ...data, phone_number: text })
                            }}
                            style={[styles.inputStyle, {
                                borderColor: theme.colors.primary,
                                color: theme.colors.text1
                            }]}
                            value={data.phone_number}
                            placeholderTextColor={theme.colors.text3}
                            placeholder='Phone Number'
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
                                CreateAccaunts
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

export default SignUp
