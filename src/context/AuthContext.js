import React, { createContext, useState, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import useAsyncStorage from '../hooks/useAsyncStorage';

export const AuthContext = createContext({
    password: null,
    setPassword: () => { },
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

console.log(AuthContext.password, " hahahah")

export const AuthProvier = ({ children }) => {
    const [password, setPassword] = useAsyncStorage("password", null)

    const [isLoggedIn, setIsLoggedin] = useState();
    const [isLocked, setIsLocked] = useState(true);
    const [isLogout, setIsLogout] = useState();

    return (
        <AuthContext.Provider value={{ password, setPassword, isLoggedIn: !!password, setIsLoggedin, isLocked, setIsLocked, isLogout, setIsLogout }}>
            {children}
        </AuthContext.Provider>
    );
}
