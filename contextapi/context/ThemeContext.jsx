'use client'

import {createContext, useContext, useState} from "react";

const ThemeContext = createContext();
export function useTheme() {
    return useContext(ThemeContext)
}
const ThemeProvider = ({children}) => {

    const [isDark, setDark] = useState(true);

    const toggleTheme = () => {
        setDark(prev => !prev);
    }

    return (
        <ThemeContext.Provider value={{isDark, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider