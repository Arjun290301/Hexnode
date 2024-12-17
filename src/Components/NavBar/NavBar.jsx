// NavBar.jsx
import React, { useState } from 'react'
import { logo1, logo2 } from "./../../assets/assets.js";
import "./NavBar.css"

const NavBar = () => {
    const [logo, setLogo] = useState(logo1)
    return (
        <div className="nav"
            onMouseEnter={() => setLogo(logo2)}
            onMouseLeave={() => setLogo(logo1)}
        >
            <div className="nav-container">
                <div className="nav-item">
                    <div className="logo">
                        <img className='logo-img' src={logo} alt='Logo' />
                    </div>
                    <div className="nav-buttons">
                        <button className="nav-btn">14 DAY FREE TRIAL</button>
                        <button className="nav-btn">LOG IN</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar