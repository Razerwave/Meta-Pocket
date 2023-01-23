import React from 'react';
import {useColorScheme } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { HomeScreen } from "./src/screens/index";
import { AuthNavigation } from './src/navigations';
import { LoginScreen , Main} from './src/screens/index';
import { AuthProvier } from './src/context/AuthContext';
// import styled from 'styled-components/native'

const App = () => {
  const isLoggedIn = false;
  const scheme = useColorScheme();

  return (
    <AuthProvier>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        {isLoggedIn ? <HomeScreen /> : <AuthNavigation />}
      </NavigationContainer>
    </AuthProvier>
  );
}
// const Wrapper = styled.View`
//   background-color: green;
// `;

export default App;
