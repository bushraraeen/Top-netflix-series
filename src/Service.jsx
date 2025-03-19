import React from "react";
import Navbar from "./Navbar";
import "./Travel.css";

const services = [
  {
    title: "Adventure Tours",
    description: "Experience thrilling adventures in breathtaking destinations.",
    image: "https://source.unsplash.com/300x200/?adventure,travel"
  },
  {
    title: "Luxury Resorts",
    description: "Stay in world-class luxury resorts with stunning views.",
    image: "https://source.unsplash.com/300x200/?luxury,resort"
  },
  {
    title: "Cultural Trips",
    description: "Immerse yourself in diverse cultures and traditions.",
    image: "https://source.unsplash.com/300x200/?culture,travel"
  },
  {
    title: "Beach Destinations",
    description: "Relax on pristine beaches with crystal-clear waters.",
    image: "https://source.unsplash.com/300x200/?beach,vacation"
  }
];

const Service = () => {
  return (
    <div className="service-container">
      <Navbar />
      <h1 className="service-title">Our Travel Services</h1>
      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} className="service-image" />
            <h2 className="service-card-title">{service.title}</h2>
            <p className="service-card-desc">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
