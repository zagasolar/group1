import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginPage from '../UiApp/Screens/Login';
import RegisterPage from '../UiApp/Screens/Register';
import DashBoardPage from './Screens/DashBoard';
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={LoginPage}></Stack.Screen>
          <Stack.Screen name='Register' component={RegisterPage}></Stack.Screen>
          <Stack.Screen name='DashBoard' component={DashBoardPage}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
