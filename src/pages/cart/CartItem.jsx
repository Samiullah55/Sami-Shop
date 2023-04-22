import React, { useContext } from 'react'
import '../../css/cart.css';
import { ShopContext } from '../../component/ShopContextProvider';


function CartItem(props) {
    const {id,productName,price,productImage}=props.data;
    const {cartItem,addToCart,removeFromCart,upadateCartItem}=useContext(ShopContext);
    return (
    <div className='cartItem'>
        
        <img src={productImage} alt="productImage"/>
        <div className='description'>
            <p><b>{productName}</b></p>
            <p>${price}</p>
            <div className='countHandler'>
                <button onClick={()=>removeFromCart(id)}>-</button>
                <input type="text" value={cartItem[id]} onChange={(e)=>upadateCartItem(Number(e.target.value),id)}/>
                <button onClick={()=>addToCart(id)}>+</button>
            </div>
        </div>
    </div>
  )
}

export default CartItem;