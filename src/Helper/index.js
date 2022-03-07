import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { useTheme } from 'styled-components/native';

import { McText, McImage } from 'Components'
import { Images } from 'Constants'

const TopHeader = ({onPress}) => {
    const theme = useTheme();
    return (
        <View style={{
            marginHorizontal: 25,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row'
        }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <McImage source={Images.logo} style={{ marginRight: 10 }} />
                <McText secondary size={28} color={theme.colors.text1} >eWallet</McText>
            </View>
            <TouchableOpacity onPress={onPress}>
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
    )
}

export default TopHeader
