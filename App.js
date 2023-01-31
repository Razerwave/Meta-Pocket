import React from 'react';
import { AuthContext } from './src/context/AuthContext';
import ContextProvider from './src/context/ContextProvider';
import TheNavigation, { MainNavigation } from './src/navigations';
// import styled from 'styled-components/native'

const App = () => {
  return (
    <ContextProvider>
      {/* <MainNavigation /> */}
      <TheNavigation />
    </ContextProvider>
  );
}
// const Wrapper = styled.View`
//   background-color: green;
// `;

export default App;
