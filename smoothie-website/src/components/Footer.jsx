import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>Slurpin Sage</h2>
        <p>
          We provide specialized winterization services to safeguard your pool
          during the off-season, and when spring arrives, we handle the thorough
          opening process.
        </p>
      </div>

      <div className="footer-main">
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">→ About Us</a></li>
            <li><a href="#">→ Portfolio</a></li>
            <li><a href="#">→ Help & FAQs</a></li>
            <li><a href="#">→ Blog</a></li>
            <li><a href="#">→ Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>📍 8502 Preston Rd. Inglewood, Maine 98380</p>
          <p>📞 +(163)-2654-3564</p>
          <p>📞 +(163)-2654-5432</p>
          <p>📧 help24/7@slurpin.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Slurpin. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
