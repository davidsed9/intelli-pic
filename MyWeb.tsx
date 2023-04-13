import React, { Component } from 'react';
import { WebView, WebViewNavigation } from 'react-native-webview';
import * as Linking from 'expo-linking';
import { Alert } from 'react-native';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import LoggedInScreen from './screens/LoggedInScreen';

type MyWebProps = {
    navigation: NativeStackNavigationProp<any>;
  };
  
  
  
  export class App extends Component<MyWebProps> {
    handleDeepLink = (url: string) => {
      // Process the incoming URL
      console.log('Incoming URL:', url);
  
      // Check if the URL is a deep link
      const parsedUrl = Linking.parse(url);
      if (parsedUrl.scheme === 'myapp') {
        // Handle the deep link and navigate to the appropriate screen
        console.log('Deep link detected:', parsedUrl);
  
        // Navigate to the LoggedIn screen
        this.props.navigation.navigate('LoggedIn');
      }
    };
  
    handleNavigationStateChange = (navState: WebViewNavigation) => {
      // Check if the URL matches your deep link
      if (navState.url.startsWith('myapp://')) {
        // Intercept the deep link and handle it
        this.handleDeepLink(navState.url);
        return false;
      }
      return true;
    };
  
    render() {
      return (
        <WebView
          source={{
            uri: 'https://intelli-pic.vercel.app/login',
          }}
          style={{ marginTop: 20 }}
          onShouldStartLoadWithRequest={this.handleNavigationStateChange}
        />
        
      );
    }
  }
  
  const Stack = createNativeStackNavigator();
  

  export default App;