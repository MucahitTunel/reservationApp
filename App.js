import React from 'react';
import 'react-native-gesture-handler';

import {
  SafeAreaView,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CompanyLogin from './src/pages/company/Login';
import ForgotPassword from './src/pages/ForgotPassword';
import CreateNewAccount from './src/pages/company/CreateNewAccount';

const Stack = createStackNavigator();


function App(){

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="CompanyLogin" component={CompanyLogin} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="CreateNewAccount" component={CreateNewAccount} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
