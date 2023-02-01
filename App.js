import React from 'react';
import { StatusBar } from 'react-native';
import ContextProvider from './src/context/ContextProvider';
import TheNavigation from './src/navigations';
// import styled from 'styled-components/native'

const App = () => {
  return (
    <ContextProvider>
      <TheStatusBar />
      <TheNavigation />
    </ContextProvider>
  );
}

import { useTheme } from 'styled-components'
import { useThemeChange } from './src/context/ThemeChangeContext';

const TheStatusBar = () => {
  const { backgroundColor } = useTheme()
  const { theme } = useThemeChange()

  return (
    <StatusBar
      backgroundColor={backgroundColor}
      barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
      showHideTransition={'slide'}
      hidden={false}
    />
  )
}

export default App;
