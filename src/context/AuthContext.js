import React, {createContext} from 'react'

export const AuthContext = createContext();

export const AuthProvier = ({children}) => {
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
}
