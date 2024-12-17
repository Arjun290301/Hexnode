import React from "react";
import "./AwardSection.css";

const awards = [
    {
        id: 1,
        logo: "IDC", // Use appropriate image or text for logo
        description:
            "Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.",
    },
    {
        id: 2,
        logo: "Gartner",
        description:
            "Hexnode mentioned as a Notable Vendor in Midmarket Context: Magic Quadrant for Unified Endpoint Management tools 2022.",
    },
    {
        id: 3,
        logo: "Forrester",
        description:
            "Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.",
    },
];

const AwardsSection = () => {
    return (
        <section className="awards-section">
            {awards.map((award) => (
                <div className="award-card" key={award.id}>
                    <h2 className="award-logo">{award.logo}</h2>
                    <p className="award-description">{award.description}</p>
                </div>
            ))}
        </section>
    );
};

export default AwardsSection;
