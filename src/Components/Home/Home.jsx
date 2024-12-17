import React from 'react';
import { mockUp } from '../../assets/assets';
import './Home.css';
import AwardsSection from '../AwardSection/AwardSection';
import NavTab from '../NavTab/NavTab';
import ControlledCarousel from '../ControlledCarousel/ControlledCarousel';
import FooterComp from '../FooterComp/FooterComp';
import Additionalinfo from '../Additionalinfo/Additionalinfo';



function Home() {
    return (
        <>
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Turn your devices into kiosks in a few minutes with Hexnode UEM
                    </h1>
                    <div className="hero-form">
                        <input
                            type="email"
                            placeholder="Your Work Email"
                            className="hero-input"
                        />
                        <button className="hero-button">GET STARTED NOW!</button>
                    </div>
                </div>
                <div className="hero-images">
                    <img src={mockUp} alt="Devices" className="devices-img" />
                </div>
            </section>
            <AwardsSection></AwardsSection>
            <h1 className='heading'>Specific kiosk modes for unique use cases</h1>
            <NavTab />
            <h1 className='heading'>What additional possibilities does the Kiosk mode offer?</h1>
            <Additionalinfo />
            <ControlledCarousel />

            <FooterComp />

        </>
    );
}

export default Home;
