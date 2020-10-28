import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type CampProps = {
  name: string;
  keyboardType: 'numeric' | 'default';
  setCamp: React.Dispatch<React.SetStateAction<string>>;
  campState: string;
};

export type CampStyleProps = {
  size?: 'large';
};

const Camp = ({
  name,
  keyboardType,
  size,
  setCamp,
  campState,
}: CampStyleProps & CampProps) => {
  return (
    <View style={styles.container}>
      {size === 'large' ? (
        <TextInput
          style={styles.inputLG}
          value={campState}
          onChangeText={setCamp}
          placeholder={name}
          placeholderTextColor="#888888"
          keyboardType={keyboardType}
        />
      ) : (
        <TextInput
          style={styles.input}
          value={campState}
          onChangeText={setCamp}
          placeholder={name}
          placeholderTextColor="#888888"
          keyboardType={keyboardType}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#F0F0F0',
    fontFamily: 'Inter_400Regular',
    borderRadius: 4,
    paddingHorizontal: 10,
    fontSize: 18,
    height: 39,
  },
  inputLG: {
    backgroundColor: '#F0F0F0',
    fontFamily: 'Inter_400Regular',
    paddingLeft: 10,
    width: 309,
    height: 39,
    fontSize: 18,
    borderRadius: 4,
  },
});

export default Camp;
