import React from "react";
import Product from "./Product";

import "./home.css";

export default function Home() {
  return (
    <div className='home'>
    <div className='home__container'>
    <img 
    className='home__image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCD9F7QG2Ad7r2k6Spk7M0ndm4UKfhqSkCAw&usqp=CAU'  />
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