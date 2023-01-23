import React, { createContext, useState } from 'react'

export const ThemeContext = createContext({
    theme: null,
    toggleTheme: () => { }
});

export const ThemeProvier = ({ children }) => {
    const [theme, toggleTheme] = useState()
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => {
    return React.useContext(ThemeContext);
}
