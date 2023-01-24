import React, {createContext, useState, useContext} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AuthContext = createContext({
    password: null,
    setPassword: () => {},
    islogged: false,
    // isLocked: false,
    // setIsLocked: () => {},
});

export const useAuth = () => {
    return useContext(AuthContext)
}
 export default useAuth;

console.log(AuthContext.password, " hahahah")

export const AuthProvier = ({children}) => {
    const [password, setPassword] = useState(
        AsyncStorage.getItem('password').then(value => setPassword(value))
        // AsyncStorage.getAllKeys()
        )
        console.log("password " + password)

        const [islogged , setIslogged] = useState();
        const [isLocked, setIsLocked] = useState();

    const Pass = (value) => {
        setPassword(value)
        console.log(password ," PAsss iin value");
    }


    return (
        <AuthContext.Provider value={{password,setPassword: Pass, islogged, setIslogged,isLocked, setIsLocked}}>
            {children}
        </AuthContext.Provider>
    );
}
