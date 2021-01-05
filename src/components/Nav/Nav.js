import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
// import Button from '../../../Button/Button';
import './Nav.css';
import { IconContext } from 'react-icons/lib';


const Nav = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);


    useEffect(() => {
        showButton();
    }, [])


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    // Note this for responsitivity
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }


    window.addEventListener('resize', showButton)


    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>
                    <div className="navbar-container container">
                        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                            <MdFingerprint className='navbar-icon' />
                    AURA
                </Link>
                        <div onClick={handleClick} className="menu-icon">
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link to='/' onClick={closeMobileMenu} className="nav-links">
                                    Home
                        </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/' onClick={closeMobileMenu} className="nav-links">
                                    Services
                        </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/' onClick={closeMobileMenu} className="nav-links">
                                    Products
                        </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Nav
