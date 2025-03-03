/* eslint-disable no-unused-vars */
import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-links">
          <ul>
            <li><a href="#" className="footer-link">Home</a></li>
            <li><a href="#" className="footer-link">About</a></li>
            <li className="dropdown">
              <a href="#" className="footer-link">Products</a>
              <div className="dropdown-content">
                <a href="#">TV</a>
                <a href="#">Refrigerator</a>
                <a href="#">Laptop</a>
                <a href="#">Mobile</a>
                <a href="#">AC</a>
                <a href="#">Washing Machine</a>
              </div>
            </li>
            <li><a href="#" className="footer-link">Contact Us</a></li>
            <li><a href="#" className="footer-link">Login</a></li>
          </ul>
        </div>

        <div className="footer-info">
          <h2 className="footer-title">PrimeElectronics</h2>
          <p className="footer-address">K.K Market, Opp of K.M Kothari High-School, SATLASANA</p>
          <p className="footer-contact">Phone: +91 6355591189</p>
          <p className="footer-contact">Email: hardikjadav1605@gmail.com</p>
          <div className="social-media">
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} PrimeElectronics. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
