import React from 'react';
import {Link} from "react-router-dom";
import { ShoppingCart } from 'phosphor-react';
import { CartContext } from '../features/CartProvider';
import { useContext } from 'react';
import "../styles/Header.css";


function Header() {
  const{cart,animateCart}=useContext(CartContext);
  return (
    <div className='header'>
        <Link to="/">ReactMeals</Link>
        <Link to="/cart">
        <div className={`cart-icon ${animateCart ? "bounce" : ""}`}>
        <ShoppingCart size={24}/>
        {cart.length}
        </div>
        </Link>
        
    </div>
  )
}

export default Header;