/* eslint-disable no-unused-vars */

import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <>
       
       <footer>
                <div className="footer">
                    <div className="footer-links">
                        <ul>
                            <li><a href="#" className="Footer_links">Home</a></li>
                            <li><a href="#" className="Footer_links">About</a></li>
                            <li className="dropdown">
                                    <a href="#" className="Footer_links">Products</a>
                                    <div className="dropdown-content">
                                        <a href="#">TV</a>
                                        <a href="#">Refrigerator</a>
                                        <a href="#">Laptop</a>
                                        <a href="#">Mobile</a>
                                        <a href="#">AC</a>
                                        <a href="#">Washing Machine</a>
                                    </div>
                            </li>
                            <li><a href="#" className="Footer_links">Contact Us</a></li>
                            <li><a href="#" className="Footer_links">Login</a></li>
                        </ul>
                    </div>
                    <div className="footer-info">
                        <p>Prime Electronics</p>
                        <p>Address: 123, ABC Road, XYZ City</p>
                        <p>Phone: 1234567890</p>
                        <p>Email: hardik123@gmail.com</p>
                        <div className="social-media">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
        </footer>



    </>
  )
}
