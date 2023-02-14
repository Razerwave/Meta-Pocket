import React from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { DarkTheme, DefaultTheme } from '../../constants';

const FixedThemeWrapper = ({ children, dark }) => {
  return (
    <ThemeProvider theme={dark ? DarkTheme : DefaultTheme}>
      <View style={{ backgroundColor: DarkTheme.backgroundColor }}>
        {children}
      </View>
    </ThemeProvider>
  );
};

export default FixedThemeWrapper;
