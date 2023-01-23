import React, {createContext} from 'react'

export const ThemeContext = createContext();

export const ThemeProvier = ({children}) => {
    return (
        <ThemeContext.Provider>
            {children}
        </ThemeContext.Provider>
    );
}

