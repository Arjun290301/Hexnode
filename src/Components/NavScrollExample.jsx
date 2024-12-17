import React, { useState, useEffect } from "react";
import { logo1, logo2 } from "./../assets/assets.js";
import "./../Components/NavBar/NavBar.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function NavScrollExample() {
    const [logo, setLogo] = useState(logo1);
    const [isScrolled, setIsScrolled] = useState(false);

    // Add scroll listener
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true); // Change background and logo
                setLogo(logo2);
            } else {
                setIsScrolled(false); // Reset background and logo
                setLogo(logo1);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup listener on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Conditional hover handlers
    const handleMouseEnter = () => {
        if (!isScrolled) {
            setLogo(logo2);
        }
    };

    const handleMouseLeave = () => {
        if (!isScrolled) {
            setLogo(logo1);
        }
    };

    return (
        <div>
            <Navbar
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Container fluid className={`nav ${isScrolled ? "scrolled" : ""}`}>
                    <Navbar.Brand className="logo">
                        <img className="logo-img" src={logo} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <div className="nav-buttons">
                            <button className="nav-btn">14 DAY FREE TRIAL</button>
                            <button className="nav-btn">LOG IN</button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavScrollExample;
