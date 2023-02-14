import React, {
  createContext,
  useState,
  useContext,
  useReducer,
  useEffect,
} from 'react';
import {ThemeProvider} from 'styled-components';
import reducer from './reducer';
import {
  INITIALIZE,
  LOCK,
  LOGIN_USER,
  LOGOUT_USER,
  RESTORE_STATE,
  TOGGLE_THEME,
  UNLOCK,
} from './actions';
import {DarkTheme, DefaultTheme} from '../constants';
import store from '../utils/store';

const theme = 'dark';

const initialState = {
  passcode: null,
  isLocked: true,
  isInitialized: false,
  theme: theme,
  isDarkTheme: theme === 'dark',
};

const AuthContext = createContext();

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvier = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {isLocked, isInitialized} = state;
  const [favorite, setFavorite] = useState(false);
  const isLoggedIn = Boolean(state.passcode);

  useEffect(() => {
    const restoreData = async () => {
      try {
        const passcode = await store.getItem('passcode');
        const theme = await store.getItem('theme');

        console.log('passcode', passcode);

        dispatch({
          type: RESTORE_STATE,
          payload: {
            passcode,
            theme,
          },
        });
      } catch (error) {
        console.error(error);
      }
    };

    restoreData();
  }, []);

  useEffect(() => {
    if (!isInitialized) {
      setTimeout(() => {
        dispatch({
          type: INITIALIZE,
        });
      }, 4000);
    }
  }, [isInitialized]);

  const login = passcode => {
    dispatch({
      type: LOGIN_USER,
      payload: {passcode},
    });

    store.setItem('passcode', passcode);
  };

  const logout = () => {
    dispatch({
      type: LOGOUT_USER,
    });

    store.removeItem('passcode');
  };

  const lock = () => {
    dispatch({
      type: LOCK,
    });
  };

  const unlock = () => {
    dispatch({
      type: UNLOCK,
    });
  };

  const checkPasscode = passcode => state.passcode === passcode;

  const toggleTheme = () => {
    const newTheme = state.isDarkTheme ? 'light' : 'dark';
    dispatch({
      type: TOGGLE_THEME,
      payload: {theme: newTheme, isDarkTheme: newTheme === 'dark'},
    });

    store.setItem('theme', newTheme);
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        isInitialized,
        isLoggedIn,
        isLocked,
        login,
        logout,
        lock,
        unlock,
        checkPasscode,
        toggleTheme,
        favorite,
        setFavorite,
      }}>
      <ThemeProvider theme={state.isDarkTheme ? DarkTheme : DefaultTheme}>
        {children}
      </ThemeProvider>
    </AuthContext.Provider>
  );
};

export {useAuth, initialState, AuthProvier};
