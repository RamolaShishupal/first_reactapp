import React from "react";

import "./Product.css";


export default function Product() {
  return (
    <div className='product' >
    <div className='product_info'>
    <p>yo yo </p>
    <p className='product_price'>
    <small>$</small>
    <strong>19.99</strong>
    </p>

    <div className='product_rating'>
    <p>⭐⭐⭐⭐⭐</p>

    </div>
    <div>

    </div>
    </div>
     
   <img class="product_image" src="https://miro.medium.com/max/8064/1*tQszPBlBdi522xW1DnhwgQ.jpeg" />
    </div>
 

  );
    
   
}