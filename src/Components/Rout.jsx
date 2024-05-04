import {Routes, Route} from 'react-router-dom';
import Movies from './Movies';
import About from './About';
import Help from './Help';
import HelpDetails from './HelpDetails';
import Cart from './Cart';
import Login from './Login';

const Rout = ({addtocart, cartItem, setCartItem}) =>{
  return(
    <>
    <Routes>
      <Route path='/' element={<Movies addtocart={addtocart}/>} />
      <Route path="/About" element={<About />} />
      <Route path="/Help" element={<Help helpDetails={HelpDetails}/>} />
      <Route path='/Cart' element={<Cart addtocart={addtocart} cartItem={cartItem} setCartItem={setCartItem} />} />
      <Route path='/Login' element={<Login />} />
    </Routes>
    </>
  );
};
export default Rout;