import React, {createContext, useState, useContext} from 'react'
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

    return (
        <AuthContext.Provider value={{password,setPassword}}>
            {children}
        </AuthContext.Provider>
    );
}
