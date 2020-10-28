import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Svg, { Path } from 'react-native-svg';
import Card from '../components/Card/index';
export default function Initial() {
  const navigation = useNavigation();
  function onForm() {
    navigation.navigate('Form');
  }
  return (
    <View style={styles.containermax}>
      <View style={styles.container}>
        <Card name="Alta" />
      </View>
      <RectButton style={styles.buttonsvg} onPress={onForm}>
        <View style={styles.svg}>
          <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <Path
              d="M8 1V15"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M1 8H15"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>
        </View>
      </RectButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 60,
  },
  containermax: {
    flex: 1,
    alignItems: 'flex-end',
  },
  svg: {
    height: 30,
    width: 30,
    backgroundColor: '#023770',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  buttonsvg: {
    marginRight: 20,
    marginBottom: 22,
  },
});
