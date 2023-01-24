import React, { createContext, useContext, useState } from 'react'
import { ThemeProvider } from 'styled-components';
import { DarkTheme, DefaultTheme } from '../constants';

export const ThemeChangeContext = createContext({
    theme: "light",
    toggleTheme: () => { }
});

export const useThemeChange = () => {
    return useContext(ThemeChangeContext)
}

export const ThemeChangeProvier = ({ children }) => {
    const [theme, setTheme] = useState("light")
    const toggleTheme = () => {
        setTheme(v => v === 'dark' ? 'light' : 'dark')
    }

    return (
        <ThemeChangeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
                {children}
            </ThemeProvider>
        </ThemeChangeContext.Provider>
    );
}

