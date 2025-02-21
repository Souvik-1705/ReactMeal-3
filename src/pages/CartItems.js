import React from 'react';
import { CartContext } from '../features/CartProvider';
import { useContext } from 'react';
import "../styles/CartItems.css";

function CartItems({id,name,description,price,quantity}) {
    const {dispatch}=useContext(CartContext);

    const increaseQuantity=()=>{
        dispatch({
            type: "Increase",
            product:{id,name,description,price,quantity}
        })
    }
    const decreaseQuantity=()=>{
        dispatch({
            type: "Decrease",
            product:{id,name,description,price,quantity}
        })
    }
    const remove=()=>{
        dispatch({
            type: "Remove",
            product:{id}
        })
    }
  return (

    <div className='cartItem'>
        
        <div className='card'>
            <h3 className='title'>{name}</h3>
            <p className='description'>{description}</p>
            <p className='price'>${price}</p>
            <p className='quantity-info'>Quantity:<strong>{quantity}</strong></p>
        </div>
        <div className='cartItem-actions'>
            <button className='increase' onClick={increaseQuantity}>+</button>
            <button className='decrease' onClick={decreaseQuantity}>-</button>
            <button className='remove' onClick={remove}>Delete</button>
        </div>
    </div>
  )
}

export default CartItems;