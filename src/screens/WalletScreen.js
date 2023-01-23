import React, {useRef, useState, useEffect} from 'react';
import { AppState, Text, View } from 'react-native'

const WalletScreen = () => {

  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  console.log(appState.current)
  
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
      <Text>WalletScreen</Text>
      <Text>Current state is: {appStateVisible}</Text>
    </View>
  )
}

export default WalletScreen;
