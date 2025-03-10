/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './Items.css';

export const Items = (props) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <Link to={`./Products/${props.id}`}>
          <img src={props.image} alt={props.name} className="product-image" />
        </Link>
      </div>
      <div className="product-info">
        <h3 className="product-name">{props.name}</h3>
        <p className="product-category">{props.category}</p>
        <p className="product-specs">{props.specs}</p>
        <p className="product-description">{props.description}</p>
        <div className="product-price">₹{props.price}</div>
      </div>
    </div>
  );
};
