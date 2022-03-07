import React from 'react';
import { View, Text, Image } from 'react-native';
import Animated from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';

const Question = ({animatedStyle}) => {
    const theme = useTheme();
    return (
        <Animated.View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: theme.colors.background,
                ...animatedStyle
            }}
        >
            <Text>
                Question Screen
            </Text>
        </Animated.View>
    );
};
// https://dribbble.com/shots/17226095--DailyUI-006-User-Question
export default Question;
