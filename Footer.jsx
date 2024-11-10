//Footer.jsx
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-section">
          <h4>Explore</h4>
          <a href="#home">Home</a>
          <a href="#questions">Questions</a>
          <a href="#articles">Articles</a>
          <a href="#tutorials">Tutorials</a>
        </div>
        <div className="footer-section">
          <h4>Support</h4>
          <a href="#faqs">FAQs</a>
          <a href="#help">Help</a>
          <a href="#contact">Contact Us</a>
        </div>
        <div className="footer-section">
          <h4>Stay Connected</h4>
          <a href="#facebook">Facebook</a>
          <a href="#twitter">Twitter</a>
          <a href="#instagram">Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        <h3>© DEVDeakin 2022</h3>
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms</a>
        <a href="#code-of-conduct">Code of Conduct</a>
      </div>
    </div>
  );
}

export default Footer;
