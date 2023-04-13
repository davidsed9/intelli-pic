import React from 'react';
import { WebView } from 'react-native-webview';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Login: undefined;
  LoggedIn: { uri: string };
};

type LoggedInScreenRouteProp = RouteProp<RootStackParamList, 'LoggedIn'>;
type LoggedInScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'LoggedIn'>;

type Props = {
  route: LoggedInScreenRouteProp;
  navigation: LoggedInScreenNavigationProp;
};

const LoggedInScreen = ({ route }: Props) => {
  const { uri } = route.params;

  return <WebView source={{ uri: "https://jwbyizeytvnlasmwdkro.supabase.co/auth/v1/verify?token=8785c034b5b89abd5d10771c8784430f9a8d0176cb6a5285f7c8378d&type=magiclink&redirect_to=https://intelli-pic.vercel.app/" }} />;
};

export default LoggedInScreen;
