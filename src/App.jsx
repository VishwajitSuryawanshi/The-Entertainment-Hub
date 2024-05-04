import React, {useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Nav from './Components/Nav';
import Route from './Components/Rout';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [cartItem, setCartItem] = useState([]);
  const addtocart = (movies) =>{
    const exsit = cartItem.find((x) => {
      return x.id === movies.id;
    })
    if(exsit)
    {
      alert("This movie is already added")
    }
    else
    {
      setCartItem([...cartItem,{...movies, quantity: 1}])
      alert("Movie is added successfully")
    }
  }

  return (
    <>
    <Router>
    <Nav cartItem={cartItem}></Nav>
    <Route addtocart={addtocart} cartItem={cartItem} setCartItem={setCartItem}></Route>
    <Footer></Footer>
    </Router>
    </>
  )
}

export default App
