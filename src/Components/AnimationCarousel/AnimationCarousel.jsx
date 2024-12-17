import React from 'react';
import { useEffect, useState } from 'react';
import "./AnimationCarousel.css"

const logos = [
    {
        id: 1,
        url: 'https://static.hexnode.com/v2/assets/img/logos/dark-logo/marriott-intl.svg',
        alt: 'Marriott'
    },
    {
        id: 2,
        url: 'https://static.hexnode.com/v2/assets/img/logos/dark-logo/merck.svg',
        alt: 'Merck'
    },
    {
        id: 3,
        url: 'https://static.hexnode.com/v2/assets/img/logos/dark-logo/costco.svg',
        alt: 'Costco'
    },
    {
        id: 4,
        url: 'https://static.hexnode.com/v2/assets/img/logos/dark-logo/saic.svg',
        alt: 'SAIC'
    },
    {
        id: 5,
        url: 'https://static.hexnode.com/v2/assets/img/logos/dark-logo/hilton.svg',
        alt: 'Hilton'
    },
    {
        id: 6,
        url: 'https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Flogos%2Fdark-logo%2Fgroup1-automotive.png&w=1920&q=75',
        alt: 'Group1 Automotive'
    },
    {
        id: 7,
        url: 'https://static.hexnode.com/v2/assets/img/logos/dark-logo/polaris.svg',
        alt: 'Polaris'
    },
    {
        id: 8,
        url: 'https://static.hexnode.com/v2/assets/img/logos/dark-logo/gorillas.svg',
        alt: 'Gorillas'
    },
    {
        id: 9,
        url: 'https://static.hexnode.com/v2/assets/img/logos/dark-logo/wolt.svg',
        alt: 'Wolt'
    }
];

const AnimationCarousel = () => {
    return (
        <div className="logo-carousel">
            <div className="logo-wrapper">
                <div className="logo-slide">
                    {logos.map((logo) => (
                        <div key={logo.id} className="logo-item">
                            <img src={logo.url} alt={logo.alt} />
                        </div>
                    ))}
                </div>
                <div className="logo-slide">
                    {logos.map((logo) => (
                        <div key={`duplicate-${logo.id}`} className="logo-item">
                            <img src={logo.url} alt={logo.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AnimationCarousel;