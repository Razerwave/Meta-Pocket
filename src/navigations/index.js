import React, { useRef, useState, useEffect } from 'react';
import { useColorScheme, AppState } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { PasswordLoginScreen } from '../screens';
import AuthNavigation from './AuthNavigation';
import HomeNavigation from './HomeNavigation';
import useAuth from '../context/AuthContext';
import MainNavigation from './MainNavigation';

const TheNavigation = () => {
  const { isLoggedIn, isLocked, setIsLocked, password } = useAuth();
  const scheme = useColorScheme();

  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  console.log(appState.current)

  useEffect(() => {
    console.log(isLoggedIn, " LOGGED state");
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      if (appState.current === 'background') {
        setIsLocked(true);
        console.log(isLocked, " JJJJJJJJJ");
      }
      console.log('AppState', appState.current);
    });


    return () => {
      subscription.remove();
    }

  }, []);
  return (
    <NavigationContainer>
      {!isLoggedIn ? <AuthNavigation /> : isLocked ? <PasswordLoginScreen /> : <MainNavigation />}
    </NavigationContainer>
  )
}

export default TheNavigation
