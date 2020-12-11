import React, { useContext } from 'react'
import './index.scss'
import { ThemeStyle } from '../../Context/darkMode'

export default function Footer() {
    const themeStyle = useContext(ThemeStyle)
    

    let theme = {}
    
    if(themeStyle.themee === "light"){
      theme = {
        background: "#efefef",
        color: "#0F0F12"
      }
    }
    else {
      theme = {
        background: "#0F0F12",
        color:"#efefef"
      }
    }
    return (
        <div className="footer text-uppercase p-5" style={theme}>
            <p className="text-uppercase">© 2020 ID. All rights reserved. Privacy Policy</p>
        </div>
    )
}
