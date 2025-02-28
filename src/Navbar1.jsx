import React,{useState} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import Data from './Data';
import Cart from './Cart';

import { BsFillCartPlusFill } from "react-icons/bs";


const Navbar1 = ({setData,cart = []}) => {
  const location=useLocation()
const navigate =useNavigate();
  const[searchTerm,setSearchTerm]=useState("")
const filterByCategory = (category) => {
  const filteredData = Data.filter((product) => product.category === category);
  console.log("Filtered Data:", filteredData); 
  setData(filteredData);
};
const filterByPrice=(price)=>{
  const filteredData=Data.filter((product)=> product.price>=price)
  setData(filteredData)
}
const handleSubmit=(e)=>{
  e.preventDefault();
  navigate(`/search/${searchTerm}`)
}



  return (
    <>
   <header className="sticky-top">
    <div className="nav-bar">
        <Link to={'/'} className="brand">E-commerce</Link>

        <form  onSubmit={handleSubmit} className="search-bar">
            <input 
            value={searchTerm}
            onChange={(e)=> setSearchTerm(e.target.value)}
            
            type="text" placeholder="search product"/>
        </form>

        <Link to={'/cart'} className="cart"><button type="button" className="btn btn-primary position-relative">
< BsFillCartPlusFill style={{fontSize:'1.5rem'}}/>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button></Link>
    </div>
    {
      location.pathname=='/' && (
        
    <div className="nav-bar-wrapper">
    <div className="items">Filter by{"->"}</div>
    <div  onClick={()=>setData(Data)}  className="items">No Filter</div>
    <div  
     onClick={()=> filterByCategory('Mobiles')}className="items">Mobiles</div>
    <div
     onClick={()=> filterByCategory('Laptops')}
    className="items">Laptops</div>
    <div  
    onClick={()=> filterByCategory('Tablets')}
    
    className="items">Tablets</div>
    <div onClick={()=> filterByPrice(39299)} className="items">{">="}39299</div>
    <div onClick={()=> filterByPrice(49299)} className="items">{">="}49299</div>
    <div  onClick={()=> filterByPrice(59299)}className="items">{">="}59299</div>
    <div  onClick={()=> filterByPrice(69299)}className="items">{">="}69299</div>
   </div>

      )
    }
    
    
   </header>
    </>
  );
};
export default Navbar1;