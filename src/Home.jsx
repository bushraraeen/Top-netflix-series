import React from "react";
import Navbar from "./Navbar";
import "./Travel.css";
import background from "./background.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="hero-section" style={{ backgroundImage: `url(${background})` }}>
        <div className="hero-content">
          <h1 className="hero-title">Your Journey Starts Here</h1>
          <p className="hero-subtitle">Choose your favourite destination</p>
          <button className="hero-button">Travel Plan</button>
        </div>
      </div>
    </div>
  );
};

export default Home;