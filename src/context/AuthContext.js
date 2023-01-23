import React, {createContext, useState, useContext, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AuthContext = createContext({
    password: null,
    setPassword: () => {}
});

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvier = ({children}) => {
    const [password, setPassword] = useState(
        AsyncStorage.getItem('password').then(value => setPassword(value))
    )

    useEffect(() => {
        if (!password) AsyncStorage.getItem('password').then(value => setPassword(value))
    }, [])

    const onLogin = (v) => {
        setPassword(v)
        AsyncStorage.setItem('password', v)
    }

    return (
        <AuthContext.Provider value={{ password, onLogin, onLogout }}>
            {children}
        </AuthContext.Provider>
    );
}
