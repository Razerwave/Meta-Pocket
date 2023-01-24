import React from 'react';
import { AuthProvier } from './src/context/AuthContext';
import ContextProvider from './src/context/ContextProvider';
import { Main } from './src/navigations';
// import styled from 'styled-components/native'

const App = () => {
  return (
    <ContextProvider>
      <Main />
    </ContextProvider>
  );
}
// const Wrapper = styled.View`
//   background-color: green;
// `;

export default App;
