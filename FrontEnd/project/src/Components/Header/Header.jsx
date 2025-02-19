// import all_prod from "../Assets/product";

import { photos } from "../../assets/product";
import './Header.css';



function Header(){


    return (
        <>
            <header>
                <div className="header">
                    <div className="image-container">
                        <img src={photos.p1} alt="header image" className="Main_img" />
                        <div className="hover-text">Prime Electronics</div>
                    </div>
                    <div className="links">
                        <ol>
                            <ul className="UL">
                                <li><a href="#" className="Header_links">Home</a></li>
                                <li><a href="#" className="Header_links">About</a></li>
                                <li className="dropdown">
                                    <a href="#" className="Header_links">Products</a>
                                    <div className="dropdown-content">
                                        <a href="#">TV</a>
                                        <a href="#">Refrigerator</a>
                                        <a href="#">Laptop</a>
                                        <a href="#">Mobile</a>
                                        <a href="#">AC</a>
                                        <a href="#">Washing Machine</a>
                                    </div>
                                </li>
                                <li><a href="#" className="Header_links">Contact Us</a></li>
                                <li><a href="#" className="Header_links">Login</a></li>
                            </ul>
                        </ol>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header