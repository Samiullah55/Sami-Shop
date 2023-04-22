import React from 'react'
import {PRODUCTS} from "../../Products";
import Product from '../../component/Product';
import '../../css/shop.css';



function Shop() {
  return (
    <div className='section-shop'>
      
      <div className='shop-title'>
        <h1>Sami Shop</h1>
      </div>
      <div className='products'>
        {PRODUCTS.map((product)=>
          <Product data={product}/>
        )}
      </div>

    </div>
  )
}

export default Shop;