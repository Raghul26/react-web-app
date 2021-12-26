import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaTimes, FaBars } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
    const [icons, setIcons] = useState(false)
    const menuiconbtn = () => {
        setIcons(!icons)
    }
    const closebtn = () => {
        setIcons(false)
    }
    return (
        <>
            <nav className="navbar">
                <Link to='/' onClick={closebtn} className="logoname">Companay</Link>
                <div className="menu-icons" onClick={menuiconbtn}>
                    {icons ? <FaTimes className="close-btn"></FaTimes> : <FaBars className="open-btn"></FaBars>}
                </div>
                <ul className=
                    {
                        icons ? 'nav-menu active' : 'nav-menu'
                    }>
                    <li>
                        <Link to='/' onClick={closebtn} className="navlinks">Home</Link>
                    </li>
                    <li>
                        <Link to='/About' onClick={closebtn} className="navlinks">About</Link>
                    </li>
                    <li>
                        <Link to='/Contact' onClick={closebtn} className="navlinks">Contact</Link>
                    </li>
                    <li>
                        <Link to="/Service" onClick={closebtn} className="navlinks">Service</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
