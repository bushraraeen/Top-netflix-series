import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Contact from "./Contact";
import Service from './Service';
import Pricingtable from './Pricingtable';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/service" element={<Service />} />
      <Route path="/price" element={<Pricingtable />} />
    </Routes>
  );
};

export default App;
