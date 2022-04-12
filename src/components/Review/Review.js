import React from 'react';

const Review = ({data}) => {
   const {img,name,price,quantity} = data;
   return (
      <div className='border-2'>
         <img src={img} alt={name} />
         <div className="p-2">
            <p className=''>name : {name}</p>
            <p className=''>Price : {price}</p>
            <p className=''>lenght : {quantity}</p>
         </div>
      </div>
   );
};

export default Review;