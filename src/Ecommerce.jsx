import React , {useState} from 'react';
import Navbar1 from './Navbar1';
import Product from './Product';
import './ecart.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ProductDetail from './ProductDetail';
import Searchitem from './Searchitem';
import Cart from './Cart';
import Data from './Data';



const Ecommerce = () => {
  const[data,setData]= useState([...Data])
  const[cart,setCart] =useState([])
  return (
    <Router>
      <Navbar1 cart={cart} setData={setData} />
      <Routes>
        <Route path="/" element={<Product data={data}  cart={cart} setCart={setCart}  />} />
        <Route path="/product/:id" element={<ProductDetail data={data}  cart={cart} setCart={setCart} />} />
        <Route path="/search/:term" element={<Searchitem data={data}  cart={cart} setCart={setCart} />} />
        <Route path="/cart/" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    
    </Router>
  );
};

export default Ecommerce;