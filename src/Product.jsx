import React  from 'react';
import Data from './Data';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { ToastContainer, toast,Bounce } from 'react-toastify';

const Product = ({data,cart,setCart}) => {

  const addToCart=(id,price,title,description,imgsrc)=>{
    const obj={id,price,title,description,imgsrc}
     
    
    setCart([...cart,obj]);
    toast.success('Prodcut added on cart', {
      position: "top-right",
      autoClose: 150,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });

  }
  console.log(data);
  return (
    <>
    <ToastContainer
position="top-right"
autoClose={150}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Bounce}
/>
    
      <div className="container">
        <div className="row">
          {data.map((Item) => {
            console.log("Rendering Product Item:", Item);
            return (
              <div key={Item.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="card" style={{ width: '18rem' }}>
                  <Link
                    to={`/product/${Item.id}`}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <img src={Item.imgsrc} className="card-img-top" alt={Item.title} />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{Item.title}</h5>
                    <p className="card-text">{Item.description}</p>
                    <button className="btn btn-primary mx-3">{Item.price}</button>
                    <button  onClick={()=>addToCart(Item.id,Item.price,Item.title,Item.description,Item.imgsrc)}className="btn btn-warning">Add To Cart</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;