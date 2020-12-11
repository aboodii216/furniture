import React, { useContext, useState, useEffect } from 'react'

import logo from '../../../images/logo.png'
import darkLogo from '../../../images/logo-dark.png'
import './index.scss'
import { TopMenuContext } from '../../../Context/topMenuContext'
import { ThemeStyle } from '../../../Context/darkMode'


export default function TopNav() {
    const topMenu = useContext(TopMenuContext)
    const themeStyle = useContext(ThemeStyle)

    const [opacity, setOpacity] = useState(0)
    const [visible, setVisible] = useState('hidden')

    useEffect(() => {
        window.onscroll = () => {
            let currentScrollPos = window.pageYOffset;

            if (currentScrollPos > 300) {
                setOpacity(1)
                setVisible('visible')
            } else {
                setOpacity(0)
                setVisible('hidden')
            }
        }
    },[setOpacity, setVisible])

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
        <div className="top-nav" style={{ opacity: opacity , visibility: visible ,background:theme.background, color:theme.color, borderBottomColor: theme.color}}>

            <div className="row">
                <div className="col-4">
                    <div className="logo-img">
                        <img src={themeStyle.themee === 'dark' ? logo : darkLogo} alt="logo" />
                    </div>
                </div>
                <div className="col-4">
                    <div className="menu" onClick={topMenu.toggleTopMenu}>
                        <span className="one mb-2" style={{background:theme.color}}></span>
                        <span className="two mb-2" style={{background:theme.color}}></span>
                    </div>
                </div>
                <div className="col-4">
                    <div className="icons">
                        <i className="fas fa-moon" onClick={themeStyle.toggleTheme}></i>
                        <i className="fas fa-search"></i>
                    </div>
                </div>
            </div>

        </div>
        
    )
}
