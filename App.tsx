import React from 'react';

import {
  useFonts,
  Inter_700Bold,
  Inter_400Regular,
  Inter_300Light,
  Inter_800ExtraBold,
} from '@expo-google-fonts/inter';
import { Rubik_400Regular } from '@expo-google-fonts/rubik';
import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular,
    Inter_300Light,
    Inter_800ExtraBold,
    Rubik_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return <Routes />;
}
