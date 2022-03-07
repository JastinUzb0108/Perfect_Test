import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useThemeContext, lightTheme, darkTheme } from 'Themes';
import Stacks from './Stacks';

export default function AppNavigator() {
    const theme = useThemeContext();
    return (
        <NavigationContainer
            theme={theme.mode === 'dark' ? darkTheme : lightTheme}
        >
            <Stacks />
        </NavigationContainer>
    );
}
