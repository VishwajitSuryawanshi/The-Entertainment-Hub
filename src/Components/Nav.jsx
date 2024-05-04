import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { MdFormatListBulleted } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { RiAccountCircleFill } from "react-icons/ri";
import './Style.css';

const Nav = ({cartItem}) =>{
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  const cartItemCount = cartItem.reduce((total, item) => total + item.quantity, 0);

  return(
    <>
      <div className="header">
        <img className="logo" src='./Images/TheEntertainmentHub.png' alt='company_logo'/>
          <div className="nav">
          <ul>
            <li>
              <Link to ='/' className={`link ${activeItem === 'Home' ? 'active' : ''}`} onClick={() => handleItemClick('Home')}>
                <IoHomeSharp className={`button-icon ${activeItem === 'Home' ? 'active' : ''}`}/>Home
              </Link>
            </li>
            <li>
              <Link to ='/About' className={`link ${activeItem === 'About' ? 'active' : ''}`} onClick={() => handleItemClick('About')} >
                <MdFormatListBulleted className={`button-icon ${activeItem === 'About' ? 'active' : ''}`}/>About
              </Link>
            </li>
            <li>
              <Link to ='/Help' className={`link ${activeItem === 'Help' ? 'active' : ''}`} onClick={() => handleItemClick('Help')} >
                <IoMdHelpCircleOutline className={`button-icon ${activeItem === 'Help' ? 'active' : ''}`}/>Help
              </Link>
            </li>
            <li>
              <Link to ='/Cart' className={`link ${activeItem === 'Cart' ? 'active' : ''}`} onClick={() => handleItemClick('Cart')} >
                <IoCart className={`button-icon ${activeItem === 'Cart' ? 'active' : ''}`}/>Cart
                {cartItemCount > 0 && <span className="badge">{cartItemCount}</span>}
              </Link>
            </li>
            <li>
              <Link to ='/Login' className={`link ${activeItem === 'Login' ? 'active' : ''}`} onClick={() => handleItemClick('Login')} >
                <RiAccountCircleFill className={`button-icon ${activeItem === 'Login' ? 'active' : ''}`}/>Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
};
export default Nav;
