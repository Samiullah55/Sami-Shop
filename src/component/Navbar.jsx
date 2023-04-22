import React from 'react'
import "../css/Navbar.css";
import { Link } from 'react-router-dom';
import {ShoppingCart} from "phosphor-react";

function Navbar() {
  return (
    <div className='section-navbar'>
        <div className='section-links'>
          <div className='logo'>
            <h3>Sami Shop</h3>
          </div>
          <div className='navigationlinks'>
            <Link className='link' to="/">Shop</Link>
            <Link className='link' to="/cart"><ShoppingCart size={32}/></Link>
        </div>
        </div>
    </div>
  )
}

export default Navbar;