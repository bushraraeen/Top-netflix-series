import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, setCart }) => {
  return (
    <div className="container">
      {cart.length === 0 ? (
        <div className="text-center">
          <h1>Your Cart is Empty</h1>
          <Link to="/" className="btn btn-warning">Continue Shopping...</Link>
        </div>
      ) : (
        cart.map((Item) => (
          <div key={Item.id} className="card mb-3" style={{ width: '600px' }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={Item.imgsrc} className="img-fluid rounded-start" alt={Item.title} />
              </div>
              <div className="col-md-8">
                <div className="card-body text-center">
                  <h5 className="card-title">{Item.title}</h5>
                  <p className="card-text">{Item.description}</p>
                  <button className="btn btn-primary mx-3">{Item.price}</button>
                  <button className="btn btn-warning">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}

      <div className="container mt-4 text-center my-5" style={{
        display:'flex',
        justifyContent:'center',
        alignItems :'center',}}
      >
        {cart.length > 0 && (
          <>
            <button className="btn btn-warning mx-5">CheckOut</button>
            <button  onClick={()=>setCart("")} className="btn btn-danger">Clear Cart</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;