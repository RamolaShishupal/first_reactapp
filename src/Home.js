import React from "react";
import Product from "./Product";

import "./home.css";

export default function Home() {
  return (
    <div className='home'>
    <div className='home__container'>
    <img 
    className='home__imgage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA4V9Gl4KPBuZMkpje_qs32Y2qdpl5UPK3AQ&usqp=CAU' alt='error' />
    <div className='home__row'>
    <Product/>
    <Product/>
    </div>

    <div className='home__row'>
    <Product/>
    <Product/>
    <Product/>
    </div>

    <div className='home__row'>
   <Product/>
    
    </div>

    </div>
    </div>
 

  );
    

}