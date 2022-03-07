import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { useTheme } from 'styled-components';

import { McText, McImage } from 'Components'
import { Images } from 'Constants'

const data = [
    {
        id: 1,
        title: 'Grammary test',
        img: Images.grammary,
        navigate: 'GrammaryTest'
    },
    {
        id: 2,
        title: 'Repition test',
        img: Images.repitions,
        navigate: 'RepitionTest'
    },
]

const Tests = ({ animatedStyle, navigation }) => {
    const theme = useTheme();
    return (
        <Animated.View
            style={{
                flex: 1,
                backgroundColor: theme.colors.background,
                ...animatedStyle
            }}
        >
            <View style={styles.headContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <McImage source={Images.logo} style={{ marginRight: 10 }} />
                    <McText secondary size={28} color={theme.colors.text1} >eWallet</McText>
                </View>
                <TouchableOpacity onPress={() => {
                    navigation.openDrawer();
                }}>
                    <McImage
                        source={
                            Images.union
                        }
                        style={{
                            width: 19,
                            height: 19,
                            tintColor: theme.colors.text2
                        }}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.container}>
                {
                    data?.map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={item.id}
                                onPress={() => {
                                    navigation.navigate(item.navigate)
                                }}
                                style={[
                                    styles.buttons,
                                    {
                                        backgroundColor: theme.colors.boxBackground
                                    }
                                ]}
                            >
                                <McImage source={item.img} style={styles.imageStyle} />
                                <McText semi size={22} color={theme.colors.text2}>
                                    {item.title}
                                </McText>
                            </TouchableOpacity>
                        )
                    })
                }
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        paddingHorizontal: 10,
        marginTop: 50
    },
    imageStyle: {
        width: 140,
        height: 140,
    },
    buttons: {
        width: 190,
        height: 190,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }
})

export default Tests;
