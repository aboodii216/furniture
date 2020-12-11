import React, { useContext } from 'react'
import './Index.scss'
import { MenuContext } from '../../Context/menuContext';

export default function SideMenu() {

    const toggleMenu = useContext(MenuContext)
    let style = {} ;
    if(toggleMenu.menu === 'close'){
        style = {
            left: '-60%'
        }
    }else {
        style = {
            left: '0'
        }
    }
    return (
        <div className="side-menu" style={style}>
            <span className="close-icon" onClick={toggleMenu.toggleMenu}>x</span>
            <ul className="list-unstyled">
                <li className="display-block"><a href="#"><span>01.</span> <span className="xl">about</span></a></li>
                <li className="display-block"><a href="#"><span>02.</span> <span className="xl">home</span></a></li>
                <li className="display-block"><a href="#"><span>03.</span> <span className="xl">gallary</span></a></li>
            </ul>
        </div>
    )
}
