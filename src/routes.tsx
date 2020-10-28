import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Header from './components/Header';
import Login from './pages/Login';
import Initial from './pages/Initial';
import Form from './pages/Form';
import Form2 from './pages/Form2';

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#FFFFFF' },
        }}
      >
        <Screen name="Login" component={Login} />
        <Screen
          name="Initial"
          component={Initial}
          options={{
            headerShown: true,
            header: () => <Header name="Victor" variant="quit" />,
          }}
        />
        <Screen
          name="Form"
          component={Form}
          options={{
            headerShown: true,
            header: () => <Header page="Form2" />,
          }}
        />
        <Screen
          name="Form2"
          component={Form2}
          options={{
            headerShown: true,
            header: () => <Header page="Login" />,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
