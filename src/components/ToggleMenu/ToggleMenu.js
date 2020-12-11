import React, { useContext } from 'react'
import './index.scss'
import { MenuContext } from '../../Context/menuContext'
import { ThemeStyle } from '../../Context/darkMode'


export default function ToggleMenu() {

    const toggleMenu = useContext(MenuContext)
    const themeStyle = useContext(ThemeStyle)

    let theme = {}
    
    if(themeStyle.themee === "light"){
      theme = {
        background: "#FFF",
        color: "#1F1F25"
      }
    }
    else {
      theme = {
        background: "#1F1F25",
        color:"#FFF"
      }
    }
    return (
        <div>
            <div className="menu" onClick={toggleMenu.toggleMenu}>
                <span className="one mb-2" style={{background:theme.color}}></span>
                <span className="two mb-2" style={{background:theme.color}}></span>
                <p className="name">menu</p>
            </div>
        </div>
    )
}
