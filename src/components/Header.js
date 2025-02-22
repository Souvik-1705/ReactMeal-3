import React from 'react';
import {Link} from "react-router-dom";
import { ShoppingCart } from 'phosphor-react';
import { CartContext } from '../features/CartProvider';
import { useContext } from 'react';
import "../styles/Header.css";


function Header() {
  const{cart,setCartVisible}=useContext(CartContext);
  const totalItems= cart.reduce((acc,item)=>acc+item.quantity,0)
  return (
    <div className='header'>
        <Link to="/">ReactMeals</Link>
        <button className='cart-button' onClick={()=>setCartVisible(true)}>
        <ShoppingCart size={24}/>
        <span className="cart-count">{totalItems}</span>
        </button>
    </div>
  )
}

export default Header;