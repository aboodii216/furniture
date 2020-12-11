import React, { useState } from 'react'

export const MenuContext = React.createContext()

export function MenuProvier(props){
    const[menu, setMenu] = useState('close')
    
    function toggleMenu(){
        setMenu(menu === 'close' ? 'open' : 'close')
    }
    
    return(
        <MenuContext.Provider value={{menu, setMenu, toggleMenu}} >
            {props.children}
        </MenuContext.Provider>
    )
}

