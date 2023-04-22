import React, { useContext} from 'react';
import "../../css/shop.css";
import { PRODUCTS } from '../../Products';
import { ShopContext } from '../../component/ShopContextProvider';
import CartItem from './CartItem';
import "../../css/cart.css";
import {useNavigate} from "react-router-dom";
function Cart() {
  const {cartItem,getTotalCartAmount}=useContext(ShopContext);
  const totalAmount=getTotalCartAmount();
  const navigate=useNavigate();
  return ( 
    <div>
          <div className='cart'>
            <h1>Your Cart Items</h1>
          </div>
          <div className='cartAllItems'>
            {PRODUCTS.map((product)=>{
               if(cartItem[product.id]!==0){
                return <CartItem data={product}/>
               }})
            }
          </div>
          {totalAmount>0 ?
          <div className='checkout'>
           
            <p>Subtotal:${totalAmount}</p>
            <button onClick={()=>navigate("/")}>Continue Shopping</button>
            <button>Checkout</button>
          </div>
: <h1 className='emptycart'>Your Cart is Empty</h1>}
    </div>
  )
}

export default Cart;