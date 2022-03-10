import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Animated from 'react-native-reanimated';
import { launchImageLibrary } from 'react-native-image-picker';
import { useThemeContext } from 'Themes'

import { useTheme } from 'styled-components/native';
import { apiUrl } from 'Api'
import { GlobalState } from 'Config';
import { McText, McImage } from 'Components'
import { Images } from 'Constants'
import TopHeader from 'Helper'

const Settings = ({ animatedStyle, navigation }) => {
    const theme = useTheme();
    const themeContext = useThemeContext();
    const state = useContext(GlobalState)
    const [token] = state.token
    const [userData, setUserData] = state.userData
    const [photo, setPhoto] = useState(null);

    const handleUploadPhoto = () => {
        fetch(`${apiUrl}user/profile/`, {
            method: 'PUT',
            body: createFormData(photo, {
                name: userData.name,
                username: userData.username,
                phone_number: userData.phone_number
            }),
            headers: {
                Accept: "application/json",
                Authorization: `Token ${token}`
            },
        })
            .then((response) => response.json())
            .then((response) => {
                console.log('response', response);
            })
            .catch((error) => {
                console.log('error', error);
            });
    };

    const createFormData = (photo, body = {}) => {
        const data = new FormData();

        data.append('photo', {
            name: photo.fileName,
            type: photo.type,
            uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
        });

        Object.keys(body).forEach((key) => {
            data.append(key, body[key]);
        });

        return data;
    };

    const handleChoosePhoto = () => {
        launchImageLibrary({
            mediaType: 'photo',
            maxHeight: 150,
            maxWidth: 150,
        }, (response) => {
            if (response) {
                setPhoto(response.assets[0]);
            }
        });


    };

    return (
        <Animated.View
            style={{
                flex: 1,
                backgroundColor: theme.colors.background,
                ...animatedStyle
            }}
        >
            <TopHeader onPress={() => {
                navigation.openDrawer();
            }} />

            <View style={styles.container}>
                <View>
                    <TouchableOpacity
                        onPress={handleChoosePhoto}
                        style={
                            styles.box
                        }>
                        {userData.photo ?
                            userData.photo.uri && <McImage source={{ uri: `${apiUrl}media/photos/rn_image_picker_lib_temp_53912b9c-2cab-4eed-87c2-3be6ffe4c69b.jpg` }} style={styles.imgStyle} />
                            :
                            photo ? 
                            photo.uri && <McImage source={{ uri: photo.uri }} style={styles.imgStyle} /> :
                            <McImage source={Images.avatarUser1} style={styles.imgStyle} />
                        }
                    </TouchableOpacity>
                </View>

                <View style={{
                    marginTop: 30,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                }}>
                    <TextInput
                        style={[styles.inputArea, {
                            color: theme.colors.text1,
                            borderColor: theme.colors.primary
                        }]}
                        value={userData.name}
                        onChangeText={(text) => {
                            setUserData({ ...userData, name: text })
                        }}
                        placeholder='Name'
                        placeholderTextColor={theme.colors.text3}
                    />

                    <TextInput
                        style={[styles.inputArea, {
                            color: theme.colors.text1,
                            borderColor: theme.colors.primary
                        }]}
                        value={(userData.username)}
                        onChangeText={(text) => {
                            setUserData({ ...userData, username: text })
                        }}
                        placeholder='User Name'
                        placeholderTextColor={theme.colors.text3}
                    />

                    <TextInput
                        style={[styles.inputArea, {
                            color: theme.colors.text1,
                            borderColor: theme.colors.primary
                        }]}
                        value={(userData.phone_number)}
                        onChangeText={(text) => {
                            setUserData({ ...userData, phone_number: text })
                        }}
                        placeholder='Phone Number'
                        placeholderTextColor={theme.colors.text3}
                    />

                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleUploadPhoto}
                >
                    <McText medium size={18} color={theme.colors.text1}>
                        Edit profile
                    </McText>
                </TouchableOpacity>

                <View style={{
                    width: '100%',
                    marginTop: 30
                }}>
                    <McText semi size={24} color={theme.colors.text1}>
                        Select Theme
                    </McText>

                    <View style={styles.themeButton}>
                        <TouchableOpacity
                            onPress={() => {
                                themeContext.setMode('dark')
                            }}
                            style={[
                                styles.buttonTheme,
                                {
                                    backgroundColor: themeContext.mode === 'dark' ? theme.colors.primary : 'transparent',
                                    borderWidth: themeContext.mode === 'dark' ? 0 : 1,
                                }
                            ]}>
                            <McText semi size={16} color={theme.colors.text1}>
                                Dark Theme
                            </McText>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                themeContext.setMode('light')
                            }}
                            style={[
                                styles.buttonTheme,
                                {
                                    backgroundColor: themeContext.mode === 'light' ? theme.colors.primary : 'transparent',
                                    borderWidth: themeContext.mode === 'light' ? 0 : 1,
                                }
                            ]} >
                            <McText semi size={16} color={theme.colors.text1}>
                                Light Theme
                            </McText>
                        </TouchableOpacity>
                    </View>
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
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
        marginTop: 20
    },
    imgStyle: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    box: {
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#FFAC30',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputArea: {
        width: 170,
        height: 45,
        padding: 6,
        borderRadius: 10,
        borderWidth: 1,
        marginVertical: 6,
        fontSize: 16
    },
    button: {
        width: 170,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginTop: 10,
        backgroundColor: '#FFAC30',
        borderRadius: 10
    },
    themeButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30
    },
    buttonTheme: {
        width: 170,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#FFAC30'
    }
})


export default Settings;
