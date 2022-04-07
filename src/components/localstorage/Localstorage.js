
const Localstorage = id => {
   let shoppingCard={};
   const checking=localStorage.getItem('shopping card');
   if(checking){
      shoppingCard=JSON.parse(checking);
   }
   // add
   const addCardData=shoppingCard[id];
   if(addCardData){
      const newCard=addCardData +1;
      shoppingCard[id]=newCard;
   }else{
      shoppingCard[id]=1;
   }
   localStorage.setItem('shopping card',JSON.stringify(shoppingCard));
};
// display data
const getData=()=>{
   let shoppingCard={};
   const checking=localStorage.getItem('shopping card');
   if(checking){
      shoppingCard=JSON.parse(checking);
   }
   return shoppingCard;
}

export  {Localstorage,getData};