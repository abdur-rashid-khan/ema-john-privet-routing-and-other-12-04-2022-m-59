import { useEffect, useState} from "react";
import { getData } from "../../localstorage/Localstorage";

const useCard = products => {
   const [card , setCard] = useState([]);
   useEffect(()=>{
      const getCardData =getData();
      const saveData=[];
      for(const productId in getCardData){
         const getProductData=products.find(products=>products.id===productId);
         if(getProductData){
            const added=getCardData[productId];
            getProductData.quantity=added;
            saveData.push(getProductData);
         }
      }
      setCard(saveData);
   },[products]);
   return [card , setCard]
};

export default useCard;