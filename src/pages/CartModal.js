import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../features/CartProvider';
import "../styles/CartModal.css";

function CartModal() {
    const{cart,dispatch,setCartVisible}=useContext(CartContext);
    const totalPrice=cart.reduce((acc,item)=>acc+item.price*item.quantity,0);
  return (
    <div className='cart-modal-overlay' onClick={()=>setCartVisible(false)}>
        <div className='cart-modal' onClick={(e)=>e.stopPropagation()}>
        <h2>Your Cart Items</h2>
        {cart.length===0 ?(
            <p>Your Cart is Empty!</p>
        ):(
            <>
            {cart.map((item)=>(
                <div key={item.id} className='cart-item'>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>{item.price.toFixed(2)}</p>
                    <p>Quantity:{item.quantity}</p>
                    <button onClick={(e)=>{
                        e.stopPropagation()
                        dispatch({type:"Increase",product:item})
                        }}>+</button>

                    <button onClick={(e)=>{
                        e.stopPropagation();
                        dispatch({type:"Decrease",product:item})
                        }}>-</button>
                    <button onClick={(e)=>{
                        e.stopPropagation()
                        dispatch({type:"Remove",product:item})
                        }}>Remove</button>
                </div>
            ))}
            <div className='cart-total'>
                <h3>Total Price:{totalPrice.toFixed(2)}</h3>
            </div>
            </>
        )}
        <button  className="close-btn" onClick={()=>setCartVisible(false)}>Close</button>
        </div>
    </div>
  )
}

export default CartModal;