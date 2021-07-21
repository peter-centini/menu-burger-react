import React from 'react'
import "./Nav.css"
import { useState } from 'react'



function Nav() {

    const [showLinks, setShowLinks] = useState(false)
    
    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    return (
        <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} `}>
        
        <div className="navbar_logo">logo </div>

        <ul className="navbar_links">
            <li className="navbar_item slideInDown-1">
                <a href="/" className="navbar_link">Accueil</a>
            </li>
            <li className="navbar_item slideInDown-2">
                <a href="/" className="navbar_link">Portfolio</a>
            </li>
            <li className="navbar_item slideInDown-3">
                <a href="/" className="navbar_link">Services</a>
            </li>
            <li className="navbar_item slideInDown-4">
                <a href="/" className="navbar_link">A propos</a>
            </li>
            <li className="navbar_item slideInDown-5">
                <a href="/" className="navbar_link">Contact</a>
            </li>
        </ul>
        <button className="navbar_burger" onClick = {handleShowLinks}>
            <span className="burger-bar"></span>
        </button>
        </nav>
    )
}

export default Nav
