import React from 'react'
import "./FooterComp.css"
const FooterComp = () => {
    return <>
        <div className="signup-container">
            <div className="signup-content">
                <h1 className="signup-heading">Sign up and try Hexnode free for 14 days!</h1>
                <div className="signup-form">
                    <input
                        type="email"
                        placeholder="Your Work Email"
                        className="signup-input"
                    />
                    <button className="signup-button">GET STARTED</button>
                </div>
                <p className="signup-note">
                    No credit cards required.{" "}
                    <a href="#demo" className="signup-link">
                        Request a demo &gt;
                    </a>
                </p>
            </div>
            <footer className="signup-footer">
                <div className="footer-links">
                    <a href="#terms">Terms of Use</a> - <a href="#privacy">Privacy</a> -{" "}
                    <a href="#cookies">Cookies</a>
                </div>
                <div className="footer-copyright">
                    &copy; 2024 Mitsogo Inc. All Rights Reserved.
                </div>
            </footer>
        </div>
    </>
}

export default FooterComp
