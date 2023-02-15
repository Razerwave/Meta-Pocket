import React from 'react';
import {View} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {DarkTheme, DefaultTheme} from '../../constants';

const FixedThemeWrapper = ({children, dark, style}) => {
  return (
    <ThemeProvider theme={dark ? DarkTheme : DefaultTheme}>
      <View
        style={{
          backgroundColor: dark
            ? DarkTheme.backgroundColor
            : DefaultTheme.backgroundColor,
          ...style,
        }}>
        {children}
      </View>
    </ThemeProvider>
  );
};

export default FixedThemeWrapper;
