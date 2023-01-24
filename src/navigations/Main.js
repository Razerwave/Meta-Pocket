import React from 'react';
import {useColorScheme } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { HomeScreen } from '../screens';
import AuthNavigation from './AuthNavigation';

const Main = () => {
  const isLoggedIn = false;
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
    {isLoggedIn ? <HomeScreen /> : <AuthNavigation />}
  </NavigationContainer>
  )
}

export default Main
