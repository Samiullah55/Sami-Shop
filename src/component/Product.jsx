import React, { useContext } from 'react'
import '../css/shop.css';
import { ShopContext } from './ShopContextProvider';


function Product(props) {

    const {id,productName,price,productImage}=props.data;
    const {addToCart,cartItem}=useContext(ShopContext);
    let cartItemAmount=cartItem[id];
  return (
    <div className="product">
      <div className='inner-product'>
        <img className='pic-size' src={productImage} alt="productimage"/>
        <div className='description'>
          <p>
            {productName}
          </p>
          <p>
            ${price}
          </p>
        </div>
        <button className='addtocart' onClick={()=>addToCart(id)}>Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
      </div>
    </div>
  )
}

export default Product;