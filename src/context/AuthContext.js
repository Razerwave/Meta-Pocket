import React, {createContext, useState, useContext} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AuthContext = createContext({
    password: null,
    setPassword: () => {}
});

export const useAuth = () => {
    return useContext(AuthContext)
}

console.log(AuthContext.password, " hahahah")

export const AuthProvier = ({children}) => {
    const [password, setPassword] = useState(
        AsyncStorage.getItem('password').then(value => setPassword(value))
        )
        console.log("password " + password)

    const Pass = (value) => {
        setPassword(value)
        console.log(password ," PAsss iin value");
    }

    return (
        <AuthContext.Provider value={{password,setPassword: Pass}}>
            {children}
        </AuthContext.Provider>
    );
}
