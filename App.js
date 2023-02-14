import React from 'react';
import TheNavigation from './src/navigations';
import {AppStatusBar} from './src/components';
import {AuthProvier} from './src/context/AuthContext';

const App = () => {
  return (
    <AuthProvier>
      <AppStatusBar />
      <TheNavigation />
    </AuthProvier>
  );
};

export default App;
