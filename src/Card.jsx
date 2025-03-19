import React from "react";

const Card= ({ title, price, features }) => {
  return (
    <div className="col-md-4">
      <div className="card text-center shadow">
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="display-6 text-primary">${price}/month</p>
          <ul className="list-group list-group-flush">
            {features.map((feature, index) => (
              <li key={index} className="list-group-item">
                ✔ {feature}
              </li>
            ))}
          </ul>
          <a href="#" className="btn btn-primary mt-3">
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;