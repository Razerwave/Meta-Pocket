import React from 'react';
import TheNavigation from './src/navigations';
import {AppStatusBar, CustomToast} from './src/components';
import {AuthProvier} from './src/context/AuthContext';

const App = () => {
  return (
    <AuthProvier>
      <AppStatusBar />
      <CustomToast />
      <TheNavigation />
    </AuthProvier>
  );
};

export default App;
