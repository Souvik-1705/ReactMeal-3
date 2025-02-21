import React, { useState } from 'react';
import { useContext } from 'react';
import {CartContext} from "../features/CartProvider";
import "../styles/MealItem.css";


function MealItem({id,name,description,price}) {
    const[quantity,setQuantity]=useState(1);
    const{dispatch}=useContext(CartContext);

    const addToCart=()=>{
        dispatch({
            type:"Add",
            product:{id,name,description,price,quantity}
        })

    }
  return (
    <div className='container'>
    <div className='meal-item'>
        <h2 className='title'>{name}</h2>
        <p className='description'>{description}</p>
        <p className='price'>${price.toFixed(2)}</p>
    </div>
    <div className='actions'>
        <input type='number' min="1" max="10" value={quantity} onChange={(e)=>setQuantity(parseInt(e.target.value))} className='quantity-input'/>
        <button className='cart-btn' onClick={addToCart}>+ Add</button>
    </div>
    </div>
    
  )
}

export default MealItem;