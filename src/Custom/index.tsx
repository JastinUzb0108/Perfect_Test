import * as React from 'react';
import { View, Platform, requireNativeComponent } from 'react-native'

let FallbackAppearanceProvider = (props: any) => <View style={{ flex: 1 }} {...props} />;

const NativeAppearanceProvider =
    Platform.OS === 'android'
        ? FallbackAppearanceProvider
        : requireNativeComponent('RNCAppearanceProvider')

export const AppearanceProvider = (props: { children: any }) => (
    <NativeAppearanceProvider style={{ flex: 1 }} {...props} />
);
