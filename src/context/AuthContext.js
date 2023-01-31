import React, {
  createContext,
  useState,
  useContext,
  useReducer,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useAsyncStorage from '../hooks/useAsyncStorage';
import {ThemeProvider} from 'styled-components';
import reducer from './reducer';
import {
  LOCK,
  LOGIN_USER,
  LOGOUT_USER,
  RESTORE_STATE,
  TOGGLE_THEME,
  UNLOCK,
} from './actions';
import {DarkTheme, DefaultTheme} from '../constants';

const initialState = {
  passcode: null,
  isLocked: true,
  theme: 'light',
};

const AuthContext = createContext();

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvier = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const restoreState = async () => {
      try {
        const passcode = await AsyncStorage.getItem('passcode');
        const theme = await AsyncStorage.getItem('theme');

        dispatch({
          type: RESTORE_STATE,
          payload: {passcode, theme},
        });
      } catch (error) {
        console.log(error);
      }
    };

    restoreState()
  }, []);
  // const addUserToAsyncStorage = (useAsyncStorage("passcode", null))

  // const [passcode, setPasscode] = useAsyncStorage("passcode", null)
  // const [isLoggedIn, setIsLoggedin] = useState();
  // const [isLocked, setIsLocked] = useState(true);
  // const [isLogout, setIsLogout] = useState();
  // const [theme, setTheme] = useAsyncStorage("theme", "light")
  // const toggleTheme = () => {
  //     setTheme(v => v === 'dark' ? 'light' : 'dark')
  // }

  const isLoggedIn = Boolean(state.passcode);

  const Login = passcode => {
    dispatch({
      type: LOGIN_USER,
      payload: {passcode},
    });
    
    AsyncStorage.setItem('passcode', passcode);
  };

  const Logout = () => {
    dispatch({
      type: LOGOUT_USER,
    });

    AsyncStorage.removeItem('passcode');
  };

  const Lock = () => {
    dispatch({
      type: LOCK,
    });
  };

  const Unlock = () => {
    dispatch({
      type: UNLOCK,
    });
  };

  const ToggleTheme = theme => {
    const newTheme = state.theme === 'dark' ? 'light' : 'dark'
    dispatch({
      type: TOGGLE_THEME,
      payload: {theme: newTheme},
    });

    AsyncStorage.setItem('theme', newTheme);
  };

  return (
    <AuthContext.Provider
      value={{...state, isLoggedIn, Login, Logout, Lock, Unlock, ToggleTheme}}>
      <ThemeProvider theme={state.theme === 'dark' ? DarkTheme : DefaultTheme}>
        {children}
      </ThemeProvider>
    </AuthContext.Provider>
  );
};

export {useAuth, initialState, AuthProvier};
