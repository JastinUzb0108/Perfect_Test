import React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';
import { McText } from 'Components'

const data = [
    {
        name: `*\t \t Salimov Mirzohid Muxammadjon o'g'li`
    },
    {
        name: `*\t \t Nurbek Nuraliyev Rustamjon o'g'li`
    },
    {
        name: `*\t \t Hasanov Jasur Ulug'bek o'g'li`
    },
    {
        name: '*\t \t Saida Beknazarova Safibullayevna'
    }
]

const Help = ({ animatedStyle }) => {
    const theme = useTheme();
    return (
        <Animated.View
            style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor: theme.colors.background,
                paddingTop: 20,
                ...animatedStyle
            }}
        >
            <McText bold size={24} color={theme.colors.text2}>
                Welcome to our mobile app
            </McText>

            <View style={{
                width: '100%',
                padding: 20
            }}>
                <McText
                    bold
                    size={20}
                    color={theme.colors.text2}
                    style={{
                        marginBottom: 20
                    }}
                >
                    The authors of this program
                </McText>
                {
                    data?.map((item, index) => {
                        return (
                            <McText
                                bold
                                size={18}
                                color={theme.colors.text2}
                                key={index}
                                style={{
                                    marginBottom: 10
                                }}
                            >
                                {item.name}
                            </McText>
                        )
                    })
                }
            </View>


        </Animated.View>
    );
};

export default Help;
