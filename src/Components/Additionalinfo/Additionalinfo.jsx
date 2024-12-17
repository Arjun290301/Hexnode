import React from 'react'
import "./Additionalinfo.css"
const Additionalinfo = () => {
    return <>
        <section className="kiosk-container">
            <div className="kiosk-content">
                {/* Left Image Section */}
                <div className="kiosk-image-container">
                    <img
                        src="https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fkiosk-mode%2F2x%2Feffortless-kiosk-deployement-image.jpg&w=640&q=80"
                        alt="Zero Touch Kiosk"
                        className="kiosk-image"
                    />
                    <div className="kiosk-badge"> Zero touch kiosk</div>
                </div>

                {/* Right Text Section */}
                <div className="kiosk-text-container">
                    <h2 className="kiosk-heading">
                        Effortless kiosk deployment & management
                    </h2>
                    <p className="kiosk-description">
                        Deploy kiosk-enabled devices straight out of the box. Flash a custom
                        Android Enterprise, Samsung Knox or ROM with Hexnode App on the
                        devices by collaborating with OEM vendors who provide specially
                        configured ROMs.
                    </p>
                    <a href="#" className="try-free-link">
                        TRY FOR FREE &gt;
                    </a>
                    <div className="kiosk-features">
                        <p>Customized interface for brand visibility</p>
                        <p>What more can you do with Hexnode kiosk?</p>
                        <p>Secure and update your app ecosystem</p>
                        <p>Provide an easy-to-use interface for end-users</p>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Additionalinfo
