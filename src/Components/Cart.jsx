import React from "react";
import { Link } from "react-router-dom";
import './Style.css';

const Cart = ({cartItem, setCartItem}) =>{

  function inc(movies)
  {
    const exsit = cartItem.find((x) =>{
      return x.id === movies.id;
    })
    setCartItem(cartItem.map((item) => {
      return item.id === movies.id ? {...exsit, quantity: exsit.quantity + 1 } : item
    }))
  }

  function dec(movies)
  {
    const exsit = cartItem.find((x) =>{
      return x.id === movies.id;
    })
    setCartItem(cartItem.map((item) => {
      return item.id === movies.id ? {...exsit, quantity: exsit.quantity - 1 } : item
    }))
  }

  function removecart(movies)
  {
    const exsit = cartItem.find((x) =>{
      return x.id === movies.id;
    })
    if(exsit.quantity > 0)
    {
      setCartItem(cartItem.filter((x) =>{
        return x.id !== movies.id
      }))
    }
  }

  const TotalPrice = cartItem.reduce((price, item) => price + item.quantity * item.Price, 0);

  return(
    <>
      {
        cartItem.length === 0 && 
        <>
        <h2 className="empty_cart">Cart is Empty, Please select a Movie</h2>
        <Link to="/">
        <button className="movie_selection">Select Now</button>
        </Link>
        </>
      }
      <div className="cart_container">
        <div className="cart_movies">
          {
            cartItem.map((item) => {
              return(
                <div className="cart_box" key={item.id}>
                <div className="cart_movies_container">
                  <div className="cart_img_box">
                    <img src={item.Img} alt={item.Title}></img>
                  </div>
                  <div className="cart_item_detail">
                    <h2>{item.Title}</h2>
                    <h3>Price: ${item.Price}</h3>
                    <button className="quantity_dec" onClick={() => dec (item)}>-</button>
                    <input type='text' value={item.quantity}></input>
                    <button className="quantity_inc" onClick={() => inc (item)}>+</button>
                    <h3>Sub-Total: ${item.Price * item.quantity}</h3>
                  </div>
                  <button className="remove_cart" onClick={() => removecart(item)}>X</button>
                </div>
              </div>
              )
            })
          }
        </div>
      </div>
      {cartItem.length > 0 && 
        <>
          <p className="cart_total">Total: ${TotalPrice} </p>
          <button className="checkout">CheckOut</button>
        </>
      }
    </>
  );
};
export default Cart;