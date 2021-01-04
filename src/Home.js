import React from "react";
import Product from "./Product";

import "./home.css";

export default function Home() {
  return (
    <div className='home'>
    <div className='home__container'>
    <img 
    className='home__image' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/ACQ/Gateway/HolidayNonPromo/DV5/US-EN_100120_HOLNonPromo_ACQ_GW_Hero_D_3000x1200_CV4_2._CB415751492_.jpg'  />
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