import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
   const clickHandler=props.added;
   const {img,name,price,ratings,seller}=props.data;
   return (
      <div className="product-items">
         <div className="product-img">
            <img src={img} alt="product" />
         </div>
         <div className="product-name">
            <p>{name}</p>
         </div>
         <div className="product-price">
            <p>Price <strong>{price}</strong> </p>
         </div>
         <div className="product-author">
            <p>{seller}</p>
         </div>
         <div className="start">
            <p>{ratings}<strong> start</strong> </p>
         </div>
         <div className="product-added">
            <button onClick={()=>clickHandler(props.data)} className='add'>Add to cart <p className='shopping-icon'><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p></button>
         </div>
      </div>
   );
};

export default Product;