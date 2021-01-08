import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SideNavbardata';
import { IconContext } from 'react-icons'
import './Navbar.css'


export default function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSideBar = () => {
        setSidebar(!sidebar);

    }
    return (
        <>
            <IconContext.Provider value={{ color: '#285DAD' }}>
                <div className='navbar' >
                    <Link to='#' className='menu_bars'>
                        <FaIcons.FaBars onClick={showSideBar} />
                    </Link>
                </div>
                <nav className={sidebar ? 'admin-nav-menu active' : 'admin-nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSideBar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((items, index) => {
                            return (
                                <li key={index} className={items.cName}>
                                    <Link to={items.path}>
                                        {items.icon}
                                        <span>{items.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}
