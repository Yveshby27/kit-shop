import React from "react";
import "../styles/aboutUsView.css";

const AboutUsView = () => {
  return (
    <div>
      <div className="history-section">
        <h2>Our Journey</h2>
        <p>
          Founded in 2023, our football kit shop started with a passion for the
          beautiful game and a commitment to providing fans with top-quality
          kits.
        </p>
        <p>
          Over the years, we have grown to become a trusted name in the
          industry, serving football enthusiasts around the world with the
          latest and most stylish kits.
        </p>
      </div>

      <div className="mission-values-section">
        <h2>Our Mission & Values</h2>
        <p>
          At Footkits, our mission is to empower football fans to express their
          passion for the sport through high-quality and stylish football kits.
        </p>
        <p>We are committed to:</p>
        <ul>
          <li>Providing exceptional customer service</li>
          <li>Offering a diverse and trendy collection of football kits</li>
          <li>Ensuring the highest standards of quality and authenticity</li>
          <li>Building a community of passionate football supporters</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUsView;
