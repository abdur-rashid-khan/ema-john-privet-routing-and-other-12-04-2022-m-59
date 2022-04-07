import React from 'react';
import {  faShop, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = (props) => {
   const product=props.data;
   let price=0;
   let shipping = 0;
   let quantity=0;
   for (const newProduct of product) {
      
      quantity=newProduct.quantity + quantity;
      price=price + newProduct.price * quantity;
      shipping=shipping + newProduct.shipping * quantity;
   }
   // tax
   let tax=0;
   let sam=price + shipping ;
   tax=sam/100*13 ;
   // total price
   const totalPrice=sam + tax ;
   return (
      <div>
         <div className="card-header">
            <h2>Order Summary </h2>
         </div>
         <div className="card-info">
            <ul>
               <li>Select Items : <strong>{quantity}</strong> </li>
               <li>Total Price : <strong>$ {price}</strong></li>
               <li>Total Shopping Charge : <strong>$ {shipping}</strong></li>
               <li>Tax : <strong>$ {tax.toFixed(3)}</strong></li>
               <li>Grand Total : <strong>$ {totalPrice.toFixed(3)}</strong></li>
            </ul>
         </div>
         <div className="sopping-option">
            <button className='clearBtn'>Clear Card <p className='icon'><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></p></button>
            <button className='Order'>Review Order <p className='icon'><FontAwesomeIcon icon={faShop}></FontAwesomeIcon></p> </button>
         </div>
</div>
   );
};

export default Card;