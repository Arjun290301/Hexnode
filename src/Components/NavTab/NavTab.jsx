import React, { useState, useEffect } from "react";
import "./NavTab.css"; // Make sure CSS is updated as needed

const tabData = [
    {
        id: "single-app",
        label: "Single App Kiosk",
        content: (
            <div>
                <h3>Powerful Single-App Kiosk solutions for enhanced control</h3>
                <ul>
                    <li>Provision devices to run one specialized app with limited functionalities.</li>
                    <li>Customize the device settings to match each use-case.</li>
                    <li>Leverage advanced kiosk settings for additional restrictions.</li>
                </ul>
            </div>
        ),
        img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fhexnode-kiosk%2Fsingle-app-kios-image.jpg&w=640&q=100",
    },
    {
        id: "multi-app",
        label: "Multi-App Kiosk",
        content: (
            <div>
                <h3>Elevate efficiency with Multi-App Kiosk</h3>
                <ul>
                    <li>Restrict device access to approved apps for focus.</li>
                    <li>Manage settings apps to reduce distractions.</li>
                    <li>Control devices with peripheral and advanced settings.</li>
                </ul>
            </div>
        ),
        img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fhexnode-kiosk%2Fmulti-app-kiosk-image.jpg&w=640&q=100",
    },
    {
        id: "web-based",
        label: "Web-based Kiosk",
        content: (
            <div>
                <h3>Manage web apps and websites effectively</h3>
                <ul>
                    <li>Allow access to only approved web content.</li>
                    <li>Configure advanced website toolbar settings.</li>
                    <li>Remote debugging and automated refresh options available.</li>
                </ul>
            </div>
        ),
        img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fhexnode-kiosk%2Fweb-based-kiosk-image.jpg&w=640&q=100",
    },
    {
        id: "asam",
        label: "ASAM Kiosk",
        content: (
            <div>
                <h3>Unlock the power of ASAM Kiosk</h3>
                <ul>
                    <li>Secure your iOS app in the foreground.</li>
                    <li>Transform devices into dedicated POS systems.</li>
                    <li>Create a focused and secure kiosk environment.</li>
                </ul>
            </div>
        ),
        img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fhexnode-kiosk%2Fdigital-signage-kiosk-image.jpg&w=640&q=100",
    },
    {
        id: "digital-signage",
        label: "Digital Signages",
        content: (
            <div>
                <h3>Engage your audience with Digital Signages</h3>
                <ul>
                    <li>Convert devices into eye-catching digital signages.</li>
                    <li>Play seamless videos and vibrant images.</li>
                    <li>Trim media, add music, and enhance branding.</li>
                </ul>
            </div>
        ),
        img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fhexnode-kiosk%2Fasam-kiosk-image.jpg&w=640&q=100",
    },
];

const NavTab = () => {
    const [activeTab, setActiveTab] = useState("single-app");
    const [isDropdown, setIsDropdown] = useState(window.innerWidth <= 768);

    // Update dropdown view on resize
    useEffect(() => {
        const handleResize = () => {
            setIsDropdown(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className="nav-tab-container">
            {/* Dropdown for Smaller Screens */}
            {isDropdown ? (
                <select
                    className="tab-dropdown"
                    value={activeTab}
                    onChange={(e) => handleTabChange(e.target.value)}
                >
                    {tabData.map((tab) => (
                        <option key={tab.id} value={tab.id}>
                            {tab.label}
                        </option>
                    ))}
                </select>
            ) : (
                // Tabs for Larger Screens
                <div className="tab-header">
                    {tabData.map((tab) => (
                        <button
                            key={tab.id}
                            className={`tab-button ${activeTab === tab.id ? "active-tab" : ""}`}
                            onClick={() => handleTabChange(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            )}

            {/* Tab Content */}
            <div className="tab-content">
                {tabData.map((tab) => (
                    <div
                        key={tab.id}
                        className={`content-panel ${activeTab === tab.id ? "active-content" : "inactive-content"}`}
                    >
                        <div className="tab-cont">
                            <div className="tab-para">{tab.content}</div>
                            {tab.img && (
                                <div className="tab-img">
                                    <img className="srcImg" src={tab.img} alt={tab.label} />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NavTab;
