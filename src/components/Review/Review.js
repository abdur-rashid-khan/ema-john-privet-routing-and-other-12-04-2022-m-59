import React from 'react';

const Review = ({data}) => {
   const {img,name,price,quantity} = data;
   return (
      <div>
         <img src={img} alt={name} />
         <p>name : {name}</p>
         <p>Price : {price}</p>
         <p>lenght : {quantity}</p>
      </div>
   );
};

export default Review;