import React, { createContext, useState } from 'react'
import Products, { PRODUCTS } from "../Products";
export const ShopContext=createContext(null);

const getDefaultCart=()=>{
  let cart={};
  for(let i=1;i<PRODUCTS.length+1;i++){
    cart[i]=0;
  }
  return cart
}

function ShopContextProvider(props) {

  const [cartItem,setCartItem]=useState(getDefaultCart());

  const addToCart=(productId)=>{
    setCartItem((prev)=>({...prev,[productId]:prev[productId]+1}));
  }

  const removeFromCart=(productId)=>{
    setCartItem((prev)=>({...prev,[productId]:prev[productId]-1}));
  }

  const upadateCartItem=(newAmount,itemId)=>{
    setCartItem((prev)=>({...prev,[itemId]:newAmount}));

  }

  const getTotalCartAmount=()=>{
    let totalAmount=0;
    for(const item in cartItem){
      if(cartItem[item]>0){
        let itemInfo=PRODUCTS.find((product)=>product.id===Number(item));
        totalAmount+=cartItem[item]*itemInfo.price;
      }
    }
    return totalAmount;
  }

  let contextValue={cartItem,addToCart,removeFromCart,upadateCartItem,getTotalCartAmount};
  console.log(cartItem);
  return (
    <div><ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider></div>
  )
}

export default ShopContextProvider;