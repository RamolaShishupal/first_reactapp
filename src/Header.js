import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

export default function Header() {
  return (
    <div className='header'>
    <img 
    className='header_logo'
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGxzYaLsYlO1-WTsPVzGNDG5qico37U5X1GA&usqp=CAU"/>

    <div className='header__search'>
    <input className='header__searchInput' type='Text'/>
    <SearchIcon className='header__searchIcon'/>
    {/*Logo*/}
    
    </div>
     <div className='header__nav'>

     <div className='header__option'>
     <span className='header__optionLine1'>Hello guest</span>
     <span className='header__optionLine2'>Sign In</span>
     </div>

     <div className='header__option'>
      <span className='header__optionLine1'>Returns</span>
     <span className='header__optionLine2'>Order</span>

     </div>

     <div className='header__option'></div>
      <span className='header__optionLine1'>Your</span>
     <span className='header__optionLine2'>Prime</span>
     </div>
   
    </div>
 

  );
  
}
