import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import useCard from '../Hooks/useProducts/useCard';
import useProducts from '../Hooks/useProducts/useProducts';
import  {Localstorage, getData } from '../localstorage/Localstorage';


import Product from '../products/Product';
import './Shop.css'
const Shop = () => {
   // it is function called 
   const [products , setProducts]=useProducts();
   const [card, setCard]=useCard(products);

   // data display for
   // useEffect(()=>{
   //    const getCardData =getData();
   //    const saveData=[];
   //    for(const productId in getCardData){
   //       const getProductData=products.find(products=>products.id===productId);
   //       if(getProductData){
   //          const added=getCardData[productId];
   //          getProductData.quantity=added;
   //          saveData.push(getProductData);
   //       }
   //    }
   //    setCard(saveData);
   // },[products])
   // product add
   const addProduct=(product)=>{
      let newCard=[];
      const exists=card.find(products=> products.id === product.id);
      
      if(!exists){
         product.quantity=1;
         newCard=[...card,product];
      }else{
         const rest = card.filter(products => products.id !== product.id);
         exists.quantity = exists.quantity + 1;
         newCard = [...rest, exists];
      }
      setCard(newCard);
      Localstorage(product.id);
   }
   return (
      <div className='shop-container'>
         <div className="all-product">
            {
               products.map(product=><Product data={product} key={product.id} added={addProduct}></Product>)
            }
         </div>
         <div className="shopping-card">
            <div className="card">
               <Card data={card}></Card>
            </div>
         </div>
      </div>
   );
};

export default Shop;