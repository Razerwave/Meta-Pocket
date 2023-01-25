import React, {useRef, useState, useEffect} from 'react';
import { AppState, Text, View, TouchableOpacity} from 'react-native'
import useAuth from '../context/AuthContext';
import { ROUTES } from '../constants/index'
import { useNavigation } from '@react-navigation/native';

const WalletScreen = () => {
  const {isLogout, setIsLogout, password, islogged,setIslogged} = useAuth();
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const navigation = useNavigation();

  console.log(appState.current)

  function logoutHandler(e) {
    console.log("clicked");
    setIslogged(false)
    console.log(islogged, " islogged false");
    console.log(password, " PASSWORD!!");
    navigation.navigate(ROUTES.WELCOME);

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
    <View>
      <Text>WalletScreen {password}</Text>
      <Text>Current state is: {appStateVisible}</Text>
      <TouchableOpacity onPress={logoutHandler}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default WalletScreen;
