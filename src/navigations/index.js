import React, {useRef, useState, useEffect} from 'react';
import {AppState} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {PasscodeLoginScreen} from '../screens';
import AuthNavigation from './AuthNavigation';
import MainNavigation from './MainNavigation';
import { useAuth } from '../context/AuthContext';

const TheNavigation = () => {
  const {isLoggedIn, isLocked, lock} = useAuth();
  // const scheme = useColorScheme();
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
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
        lock();
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <NavigationContainer>
      {!isLoggedIn ? (
        <AuthNavigation />
      ) : isLocked ? (
        <PasscodeLoginScreen />
      ) : (
        <MainNavigation />
      )}
    </NavigationContainer>
  );
};

export default TheNavigation;
