import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import Svg, { Path } from 'react-native-svg';
export default function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  function onLogin() {
    navigation.navigate('Initial');
  }

  return (
    <View style={styles.container}>
      <View style={styles.cntSvg}>
        <Svg width="162" height="58" viewBox="0 0 162 58" fill="none">
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M49.4673 37.7598C46.0191 44.561 42.133 49.5666 37.6995 52.7223C32.7188 56.2589 26.3696 58 18.7069 58C9.89476 58 4.25718 56.0413 1.73942 52.1238C-0.997268 47.6623 -0.504664 39.9906 3.21723 29C6.99387 18.0094 11.7557 10.3377 17.5575 5.87617C22.7572 1.95872 29.7084 0 38.5205 0C46.4022 0 51.6019 1.7955 54.2291 5.4409C56.4732 8.65103 56.7469 13.6567 55.1049 20.4578L32.8282 22.3077C34.2513 17.955 34.9628 15.2345 35.127 14.0919C35.2365 12.9493 34.9628 12.4053 34.306 12.4053C33.5398 12.4053 32.7735 13.167 31.9525 14.7448C31.022 16.758 29.2705 21.4916 26.698 28.9456C24.1803 36.3996 22.6477 41.1332 22.2099 43.1463C21.9362 44.7242 22.2099 45.4859 22.9761 45.4859C23.6329 45.4859 24.2898 44.9962 24.8918 43.9625C25.4939 42.9287 26.7528 40.1538 28.6685 35.5291L49.4673 37.7598ZM95.6079 57.1295H77.2721L75.6848 46.7917C74.8091 40.9156 74.3712 36.182 74.3712 32.6454C73.6049 35.6923 72.1818 40.1538 70.1567 46.0844L66.3801 57.1839H45.5812L64.7928 0.979362H84.278L85.3727 7.88931C86.4674 14.7448 87.0147 19.8593 87.0694 23.2326C87.8357 19.7505 89.3135 14.8537 91.4481 8.54221L94.0206 0.979362H114.819L95.6079 57.1295ZM157.731 13.3302H147.222L132.28 57.1295H109.182L124.124 13.3302H113.615L117.885 0.870543H162L157.731 13.3302Z"
            fill="white"
          />
        </Svg>
        <View style={styles.ContainerText}>
          <Text style={styles.cntSvgText}>Data survey</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.wrapper}>
          <TextInput
            style={styles.input}
            value={id}
            onChangeText={setId}
            placeholder="ID"
            placeholderTextColor="#888888"
            keyboardType={'numeric'}
          />

          <TextInput
            style={styles.input}
            value={password}
            secureTextEntry={true}
            onChangeText={setPassword}
            placeholder="Senha"
            placeholderTextColor="#888888"
          />

          <RectButton style={styles.passwordRemember} onPress={onLogin}>
            <Text style={styles.passwordRememberText}>Esqueceu a senha?</Text>
          </RectButton>
        </View>

        <RectButton style={styles.nextButton} onPress={onLogin}>
          <Text style={styles.nextButtonText}>ENTRAR</Text>
        </RectButton>
      </View>
      <View style={styles.background} />
    </View>
  );
}

const styles = StyleSheet.create({
  ContainerText: {
    width: 193,
    alignItems: 'flex-end',
    marginTop: 10,
  },
  cntSvg: {
    marginTop: 119,
    marginLeft: 100,
  },
  cntSvgText: {
    fontStyle: 'italic',
    fontSize: 20,
    fontFamily: 'Inter_700Bold',
    color: '#FFFFFF',
    fontWeight: '700',
  },
  container: {
    flex: 1,
    backgroundColor: '#003770',
  },
  background: {
    backgroundColor: '#FFFFFF',
    height: '56%',
    borderRadius: 4,
    marginTop: '38%',
  },
  card: {
    position: 'absolute',
    zIndex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 255,
    marginHorizontal: 41,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    width: 280,
    height: 211,

    elevation: 5,
  },
  wrapper: {},

  input: {
    backgroundColor: '#F0F0F0',
    fontFamily: 'Inter_400Regular',
    borderRadius: 4,
    width: 232,
    height: 40,
    fontSize: 18,
    paddingVertical: 9,
    paddingLeft: 8,
    marginBottom: 16,
    textAlignVertical: 'top',
  },

  nextButton: {
    backgroundColor: '#023770',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    height: 34,
    width: 96,

    marginTop: 21,
  },

  nextButtonText: {
    fontFamily: 'Inter_800ExtraBold',
    fontSize: 12,
    color: '#FFF',
  },

  passwordRemember: {
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 2,
    width: 100,
  },

  passwordRememberText: {
    fontFamily: 'Inter_300Light',
    fontSize: 11,
    color: '#023770',
  },
});
