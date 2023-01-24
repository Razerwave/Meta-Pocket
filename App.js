import React from 'react';
import { AuthProvier } from './src/context/AuthContext';
import { Main } from './src/navigations';
// import styled from 'styled-components/native'

const App = () => {

  return (
    <AuthProvier>
     <Main/>
    </AuthProvier>
  );
}
// const Wrapper = styled.View`
//   background-color: green;
// `;

export default App;
