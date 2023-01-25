import React, {createContext, useState, useContext} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AuthContext = createContext({
    password: null,
    setPassword: () => {},
    islogged: false,
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

export const AuthProvier = ({children}) => {
    const [password, setPassword] = useState(
        AsyncStorage.getItem('password').then(value => setPassword(value))
        )
        console.log("password " + password)

        const [islogged , setIslogged] = useState();
        const [isLocked, setIsLocked] = useState();
        const [isLogout, setIsLogout] = useState();

        const Pass = (value) => {
            if(value){
                setPassword(value)
                console.log(password ," PAsss iin value");
            }
            else if(!value){
                setIslogged(false)
                console.log(password ," PAsss is null");
            }
        }
    return (
        <AuthContext.Provider 
            value={{password,setPassword: Pass, islogged, setIslogged,isLocked, setIsLocked, isLogout, setIsLogout}}>
            {children}
        </AuthContext.Provider>
    );
}
