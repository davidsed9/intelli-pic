import React, { Component } from 'react';
import { WebView, WebViewNavigation } from 'react-native-webview';
import * as Linking from 'expo-linking';
import { Alert } from 'react-native';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import LoggedInScreen from './screens/LoggedInScreen';
import { MyWebScreen } from './MyWeb';




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={MyWebScreen} />
        <Stack.Screen name="LoggedIn" component={LoggedInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}