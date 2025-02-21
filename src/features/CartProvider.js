import React, { useReducer, useState } from 'react';
import { createContext } from 'react';
import CartReducer from './CartReducer';

export const CartContext=createContext();


function CartProvider({children}) {
    const[cart,dispatch]=useReducer(CartReducer,[]);
    const[animationCart,setAnimationCart]=useState(false);
  return (
    <CartContext.Provider value={{cart,dispatch,animationCart,setAnimationCart}}>{children}</CartContext.Provider>
  )
}

export default CartProvider;