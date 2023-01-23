import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from "./src/screens/index";
import { AuthNavigation } from './src/navigations';
import { LoginScreen , Main} from './src/screens/index';
import { AuthProvier } from './src/context/AuthContext';
// import styled from 'styled-components/native'

const App = () => {
  const isLoggedIn = false;

  return (
    <AuthProvier>
      <NavigationContainer>
        {isLoggedIn ? <HomeScreen /> : <Main />}
      </NavigationContainer>
    </AuthProvier>
  );
}
// const Wrapper = styled.View`
//   background-color: green;
// `;

export default App;
