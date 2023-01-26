import React from 'react';
import ContextProvider from './src/context/ContextProvider';
import { MainNavigation } from './src/navigations';
// import styled from 'styled-components/native'

const App = () => {
  return (
    <ContextProvider>
      <MainNavigation />
    </ContextProvider>
  );
}
// const Wrapper = styled.View`
//   background-color: green;
// `;

export default App;
