import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from "./src/screens/index";

const App = () => {
  return (
    <NavigationContainer>
      <HomeScreen/>
    </NavigationContainer>
  );
}

export default App;
