import React, { useState } from 'react'


export const TopMenuContext = React.createContext()

export function TopMenuProvier(props){
    const[topMenu, setTopMenu] = useState('close')
    
    function toggleTopMenu(){
        setTopMenu(topMenu === 'close' ? 'open' : 'close')
    }
    
    return(
        <TopMenuContext.Provider value={{topMenu, setTopMenu, toggleTopMenu}} >
            {props.children}
        </TopMenuContext.Provider>
    )
}