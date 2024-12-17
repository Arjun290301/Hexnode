import React from 'react'
import "./Platforms.css"
const Platforms = () => {
    const images = [
        "https://static.hexnode.com/v2/assets/img/ads-pages/platform/ios.svg",
        "https://static.hexnode.com/v2/assets/img/ads-pages/platform/android-tv.svg",
        "https://static.hexnode.com/v2/assets/img/ads-pages/platform/apple-tv.svg",
        "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fplatform%2Famazon-fire.png&w=256&q=100",
        "https://static.hexnode.com/v2/assets/img/ads-pages/platform/windows.svg",
        "https://static.hexnode.com/v2/assets/img/ads-pages/platform/android.svg"
    ];

    return <>
        <h1 className='heading'>Platforms Support</h1>
        <div className="image-row">
            {images.map((src, index) => (
                <img key={index} className="image-item" src={src} alt={`Image ${index + 1}`} />
            ))}
        </div>
    </>
}

export default Platforms
