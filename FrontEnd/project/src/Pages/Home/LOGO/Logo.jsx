/* eslint-disable no-unused-vars */
import React from 'react';
import { FaTv, FaMobileAlt, FaLaptop, FaSnowflake, FaBox, FaSoap } from 'react-icons/fa';
import './Logo.css';

const categories = [
    { name: 'TV', icon: <FaTv /> },
    { name: 'Refrigerator', icon: <FaBox /> },
    { name: 'AC', icon: <FaSnowflake /> },
    { name: 'Mobile', icon: <FaMobileAlt /> },
    { name: 'Laptop', icon: <FaLaptop /> },
    { name: 'Washing Machine', icon: <FaSoap /> }
  ];
  


function Logo(){

    return(
        <div className="category-container">
            {categories.map((category, index) => (
                <div className="category-card" key={index}>
                <div className="category-icon">{category.icon}</div>
                <div className="category-name">{category.name}</div>
                </div>
            ))}
        </div>
    );
}

export default Logo;