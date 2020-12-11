import React, { useState } from 'react'


export const ThemeStyle = React.createContext()

export function ThemeProvider(props){
    const [themee, setTheme] = useState('dark')
    
    function toggleTheme(){
        setTheme(themee === 'dark' ? 'light' : 'dark')
    }
    
    return(
        <ThemeStyle.Provider value={{themee, setTheme, toggleTheme}} >
            {props.children}
        </ThemeStyle.Provider>
    )
}