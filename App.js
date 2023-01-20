import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from "./src/screens/index";
import { AuthNavigation } from './src/navigations';

const App = () => {
  const isLoggedIn = false;

  return (
    <NavigationContainer>
      {isLoggedIn ? <HomeScreen /> : <AuthNavigation />}
    </NavigationContainer>
  );
}

export default App;
