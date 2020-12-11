import React, { useContext } from 'react'
import ToggleMenu from '../../ToggleMenu/ToggleMenu'
import logo from '../../../images/logo.png'
import darkLogo from '../../../images/logo-dark.png'

import './index.scss'
import { ThemeStyle } from '../../../Context/darkMode'

export default function LeftNav() {
    const themeStyle = useContext(ThemeStyle)
    let theme = {}
    
    if(themeStyle.themee === "light"){
      theme = {
        color: "#1F1F25"
      }
    }
    else {
      theme = {
        color:"#FFF"
      }
    }
    return (
        <div>
            <div className="left-nav pt-5">
                <div className="brand">
                    <div className="logo-img">
                        <img src={themeStyle.themee === 'dark' ? logo : darkLogo} alt="logo" />
                    </div>
                    <div className="logo-text text-uppercase">
                        <h5>interior design</h5>
                    </div>
                </div>
                <ToggleMenu />
                <ul className="list-unstyled icons">
                    <li><a href="#" style={theme}><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#" style={theme}><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#" style={theme}><i className="fab fa-instagram"></i></a></li>
                </ul>
            </div>
        </div>
    )
}
