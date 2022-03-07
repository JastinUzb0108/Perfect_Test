import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';

import { useTheme } from 'styled-components';
import { dummyData } from 'Mock'
import { McText, McImage } from 'Components'
import { Images } from 'Constants'

const GrammaryTest = ({ animatedStyle, navigation }) => {
  const theme = useTheme()
  const data = dummyData.GrammaryTest

  const [current, setCurrent] = useState(0)

  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        ...animatedStyle
      }}
    >
      <View style={[{
        borderBottomColor: theme.colors.success,
      },
      styles.logoBox
      ]}>
        <McImage source={Images.logo} style={{ marginRight: 10 }} />
        <McText secondary size={28} color={theme.colors.text1} >eWallet</McText>
      </View>

      <ScrollView style={{
        flex: 1,
        paddingHorizontal: 25,
        marginTop: 26
      }}
        persistentScrollbar={false}
      >
        {
          data?.map((item, index) => {
            return (
              <View key={item.id} style={{
                marginBottom: 30
              }}>
                <View style={{
                  flexDirection: 'row'
                }}>
                  <McText bold size={20} color={theme.colors.text2} >
                    {index + 1}.
                  </McText>
                  <McText bold size={20} color={theme.colors.text2} style={{
                    marginLeft: 10
                  }} >
                    {item.answare}
                  </McText>
                </View>
                <View>
                  {
                    item.variants?.map((variant, indexVariant) => {
                      return (
                        <TouchableOpacity
                          onPress={() => {
                            if (indexVariant === 0) {
                              setCurrent(current + 1)
                            }
                            else {
                              console.log(current);
                            }
                          }}
                          key={indexVariant}
                          style={[
                            styles.buttonContainer,
                            {
                              borderColor: theme.colors.primary
                            }]}
                        >
                          <McText medium size={18} color={theme.colors.text2} >
                            {variant.variant}
                          </McText>
                        </TouchableOpacity>
                      )
                    })
                  }
                </View>
              </View>
            )
          })
        }
        <View style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20
        }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home')
            }}
            style={{
              width: 260,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: theme.colors.primary,
              borderRadius: 10
            }}>
            <McText bold size={20} color={theme.colors.text1}>
              Finsh Test
            </McText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 44,
  },
  buttonContainer: {
    marginLeft: 20,
    marginVertical: 10,
    width: 260,
    padding: 10,
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1.5,
  },
  logoBox: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 10,
  }
});

export default GrammaryTest;
