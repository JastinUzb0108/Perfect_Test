import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';

import { McText, McImage } from 'Components'
import TopHeader from 'Helper'
import { Images } from 'Constants'

const Marketing = ({ animatedStyle, navigation }) => {
    const theme = useTheme();
    return (
        <Animated.View
            style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor: theme.colors.background,
                ...animatedStyle
            }}
        >
            <View style={{
                width: '100%',
                justifyContent: 'space-between'
            }}>
                <TopHeader onPress={() => {
                    navigation.openDrawer();
                }} />
            </View>

            <View style={{
                marginTop: 30
            }}>
                <McImage
                    source={Images.avatarUser1}
                    style={[
                        {
                            borderColor: theme.colors.primary
                        },
                        styles.imageStyle
                    ]}
                />
            </View>
            <View>
                <McText>
                    
                </McText>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 75,
        borderWidth: 2,
    }
})

export default Marketing;
