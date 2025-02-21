import React from 'react';
import { CartContext } from '../features/CartProvider';
import { useContext } from 'react';
import CartItems from './CartItems';
import "../styles/Cart.css";

function Cart() {
  const{cart}=useContext(CartContext);
  const totalPrice=cart.reduce((acc,item)=>acc+item.price*item.quantity,0);
  
  return (
    <div className='cart'>
      <div className='cart-products'>
        {cart.map((item)=>
          <CartItems id={item.id} name={item.name} description={item.description} price={item.price} quantity={item.quantity}/>
        )}
      </div>
      <div className='checkout'>
        <h5>Total Amount of Items:{cart.length}</h5>
        <h5>Total Price:${totalPrice.toFixed(2)}</h5>
      </div>
    </div>
  )
}

export default Cart;