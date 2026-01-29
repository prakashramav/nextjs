'use client'

import { useTheme } from "@/context/ThemeContext"

const ThemeWrapper = ({children}) => {

    const {isDark} = useTheme();
    
    return(
        <div
            className={`min-h-screen transition-colors duration-300
                ${isDark ? "bg-gray-950 text-white" : "bg-gray-100 text-gray-900"}
            `}
        >
            {children}
        </div>
    )
}

export default ThemeWrapper

