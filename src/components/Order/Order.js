import React from 'react';
import Card from '../card/Card';
import useCard from '../Hooks/useProducts/useCard';
import useProducts from '../Hooks/useProducts/useProducts';
import Review from '../Review/Review';
import './Order.css';
const Order = () => {
   const [products , setProducts]=useProducts();
   const [card, setCard]=useCard(products);
   const clearCart=()=>{
      console.log('clear')
   }
   return (
      <div id='order'>
         <div id="order-products " className='grid grid-cols-3 gap-2'>
         {
            card.map(product => <Review key={product.id} data={product} ></Review>)
         }
         </div>
         <div id="order-card">
            <Card clearCart={clearCart} data={card}></Card>
         </div>
      </div>
   );
};

export default Order;