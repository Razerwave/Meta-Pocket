import React from 'react';
import {View} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {DarkTheme, DefaultTheme} from '../../constants';

const FixedThemeWrapper = ({children, dark, style, noBG}) => {
  return (
    <ThemeProvider theme={dark ? DarkTheme : DefaultTheme}>
      <View
        style={{
          backgroundColor: noBG ? null : dark
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
