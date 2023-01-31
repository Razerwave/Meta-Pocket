import React, { createContext, useState, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import useAsyncStorage from '../hooks/useAsyncStorage';

export const AuthContext = createContext({
    passcode: null,
    setPasscode: () => { },
    isLoggedIn: false,
    // isLocked: false,
    // setIsLocked: () => {},
    // isLogout: false,
    // setIsLogout: () => {},
});

export const useAuth = () => {
    return useContext(AuthContext)
}
export default useAuth;

console.log(AuthContext.passcode, " hahahah")

export const AuthProvier = ({ children }) => {
    const [passcode, setPasscode] = useAsyncStorage("passcode", null)

    const [isLoggedIn, setIsLoggedin] = useState();
    const [isLocked, setIsLocked] = useState(true);
    const [isLogout, setIsLogout] = useState();

    return (
        <AuthContext.Provider value={{ passcode, setPasscode, isLoggedIn: !!passcode, setIsLoggedin, isLocked, setIsLocked, isLogout, setIsLogout }}>
            {children}
        </AuthContext.Provider>
    );
}
