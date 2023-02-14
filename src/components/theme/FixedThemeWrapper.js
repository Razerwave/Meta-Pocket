import React from 'react';
import {ThemeProvider} from 'styled-components';
import {DarkTheme, DefaultTheme} from '../../constants';

const FixedThemeWrapper = ({children, dark}) => {
  return (
    <ThemeProvider theme={dark ? DarkTheme : DefaultTheme}>
      {children}
    </ThemeProvider>
  );
};

export default FixedThemeWrapper;
