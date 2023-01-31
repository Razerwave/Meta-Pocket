import React, { useRef, useState, useEffect } from 'react';
import { AppState, Text, View, TouchableOpacity } from 'react-native'
import useAuth from '../../context/AuthContext';
import { ROUTES } from '../../constants/index'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Screen, Stack, StyledText } from '../../components';

const WalletScreen = () => {
  const { isLogout, setIsLogout, password, isLoggedIn, setPassword } = useAuth();
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const navigation = useNavigation();

  console.log(appState.current)

  function logoutHandler(e) {
    console.log("clicked");
    AsyncStorage.removeItem('password')
    setPassword(null)
    console.log(isLoggedIn, " islogged false");
    console.log(password, " PASSWORD!!");
    // navigation.navigate(ROUTES.WELCOME);

  }

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
      console.log('AppState', appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <Screen>
      <Stack spacing={16} padding={16}>
        <StyledText>WalletScreen {password}</StyledText>
        <StyledText>Current state is: {appStateVisible}</StyledText>
        <TouchableOpacity onPress={logoutHandler}>
          <StyledText>Logout</StyledText>
        </TouchableOpacity>
      </Stack>
    </Screen>
  )
}

export default WalletScreen;
