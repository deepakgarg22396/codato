import React from "react";
import "./trustedByUs.css";
import Logo1 from "../assets/images/logotrust1.png";
import Logo2 from "../assets/images/logotrust2.png";
import Logo3 from "../assets/images/logotrust3.svg";
import Logo4 from "../assets/images/logotrust4.png";

const TrustedByUs = () => {
  return (
    <section className="trusted-by-us" id="trusted">
      <div className="trusted-content">
        <h2 className="trusted-heading">Trusted By</h2>
        <p className="software-business-text">Over 40K+ businesses growing with us</p>
        <div className="logo-container">
          <div className="logo-wrapper">
            <img src={Logo1} alt="Client Logo" className="logo" />
          </div>
          <div className="logo-wrapper">
            <img src={Logo2} alt="Client Logo" className="logo" />
          </div>
          <div className="logo-wrapper">
            <img src={Logo3} alt="Client Logo" className="logo" />
          </div>
          <div className="logo-wrapper">
            <img src={Logo4} alt="Client Logo" className="logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedByUs;