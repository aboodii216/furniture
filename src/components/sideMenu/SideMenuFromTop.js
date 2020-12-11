import React, { useContext } from 'react'
import './top.scss'
import { TopMenuContext } from '../../Context/topMenuContext';


export default function SideMenuFromTop() {

    const topMenu = useContext(TopMenuContext)
    let style = {} ;
    if(topMenu.topMenu === 'close'){
        style = {
            top: '-460px'
        }
    }else {
        style = {
            top: '0'
        }
    }
    
    return (
        <div className="side-menu-top" style={style}>
            <span className="close-icon" onClick={topMenu.toggleTopMenu}>x</span>
            <ul className="list-unstyled">
                <li className="display-block"><a href="#"><span>01.</span> <span className="xl">about</span></a></li>
                <li className="display-block"><a href="#"><span>02.</span> <span className="xl">home</span></a></li>
                <li className="display-block"><a href="#"><span>03.</span> <span className="xl">gallary</span></a></li>
            </ul>
        </div>
    )
}
