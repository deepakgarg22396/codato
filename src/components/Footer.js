import React, { useState } from "react";
import "./footer.css";
import AnimatedCursor from "react-animated-cursor";

const Footer = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
      {/* Animated Cursor for Entire Page */}
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color="255, 255, 255"
        outerAlpha={0.3}
        innerScale={1.5}
        outerScale={2.5}
        showSystemCursor={true} // Ensure system cursor is visible
        clickables={[
          "a",
          "button",
          ".link",
          ".modal-content",
          ".modal-overlay",
        ]}
      />

      <footer className="footer" id="about">
        <div className="footer-top">
          {/* Logo Section */}
          <div className="footer-logo">
            <h2 className="footer-logo-text">Codato</h2>
            <p className="footer-description">
              Empowering businesses with cutting-edge software solutions. From
              scalable web applications to AI-driven automation, we help you
              innovate and stay ahead in the digital landscape.
            </p>
          </div>

          {/* Our Services Section */}
          <div className="footer-services">
            <h3 className="footer-section-title">Our Services</h3>
            <ul>
              <li>Custom Software Development</li>
              <li>AI & Machine Learning Solutions</li>
              <li>Cloud Infrastructure & DevOps</li>
              <li>UI/UX Design & Web Development</li>
              <li>Enterprise & SaaS Solutions</li>
            </ul>
          </div>

          {/* Explore More Section */}
          <div className="footer-explore">
            <h3 className="footer-section-title">Innovation Hub</h3>
            <ul>
              <li>Digital Transformation</li>
              <li>AI & Cloud Solutions</li>
              <li>Scaling Your Business</li>
              <li>Work With Us</li>
            </ul>
          </div>

          {/* Contact Details Section */}
          <div className="footer-contact">
            <h3 className="footer-section-title">Contact Us</h3>
            <ul>
              <li>Email: info@codato.in</li>
              <li>Phone: +91 8006423975</li>
              <li>
                Address: JRC Wild Woods, Gatthali Road, Bangalore - 560035
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          {/* <div className="footer-social">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
          </div> */}

          {/* Terms & Privacy Policy Links */}
          <div className="footer-legal">
            <button className="terms-link" onClick={() => setShowTerms(true)}>
              Terms & Conditions
            </button>{" "}
            |
            <button className="terms-link" onClick={() => setShowPrivacy(true)}>
              Privacy Policy
            </button>
          </div>

          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Codato. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Terms & Conditions Modal */}
      {showTerms && (
        <div className="modal-overlay" onClick={() => setShowTerms(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowTerms(false)}>
              ✖
            </button>
            <h2>Terms & Conditions</h2>
            <p>
              Welcome to Codato! By using our services, you agree to the
              following terms and conditions.
            </p>
            <h3>1. Use of Our Services</h3>
            <p>
              Our software solutions are provided to enhance business
              performance. Misuse or unauthorized modification of our services
              is prohibited.
            </p>
            <h3>2. Intellectual Property</h3>
            <p>
              All content, trademarks, and technologies on this site are owned
              by Codato and cannot be copied without permission.
            </p>
            <h3>3. User Responsibilities</h3>
            <p>
              Users must provide accurate information and ensure they comply
              with all applicable laws.
            </p>
            <h3>4. Privacy & Data Security</h3>
            <p>
              We respect your privacy. All user data is securely stored and
              protected.
            </p>
            <h3>5. Amendments</h3>
            <p>
              Codato reserves the right to update these terms at any time.
              Continued use of our services constitutes acceptance of the latest
              terms.
            </p>
            <p>
              For further inquiries, contact us at{" "}
              <strong>info@codato.in</strong>.
            </p>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div className="modal-overlay" onClick={() => setShowPrivacy(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setShowPrivacy(false)}
            >
              ✖
            </button>
            <h2>Privacy Policy</h2>
            <p>Effective Date: March 8, 2025</p>
            <p>
              Welcome to Codato! Your privacy is important to us. This policy
              explains how we collect, use, and protect your data.
            </p>

            <h3>1. Data Collection & Usage</h3>
            <p>
              We collect personal data (name, email, phone) and non-personal
              data (IP, browser type) to enhance services, improve security, and
              support marketing (opt-out available).
            </p>

            <h3>2. Data Protection & Security</h3>
            <p>
              We implement SSL encryption, secure storage, and restricted access
              to protect your information.
            </p>

            <h3>3. Cookies & Third-Party Services</h3>
            <p>
              We use cookies for analytics and personalization. Third-party
              services like Google Analytics may have their own policies.
            </p>

            <h3>4. Your Rights</h3>
            <p>
              You can request data access, updates, or deletion by contacting us
              at <strong>info@codato.in</strong>.
            </p>

            <h3>5. Policy Updates</h3>
            <p>
              We may update this policy, with the latest version always
              available on our website. For inquiries, email us at{" "}
              <strong>info@codato.in</strong>.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
