import React, { useState } from 'react';

import './App1.css';

function App1() {
  const [name, setName] = useState(""); 
  const [sirName, setSirName] = useState(""); 
  const [phoneNumber, setPhoneNumber] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [fullName, setFullName] = useState(""); 

  const onSubmit = (event) => {
    event.preventDefault(); 
    setFullName(name + ' ' + sirName); 
    
    setName("");
    setSirName("");
    setPhoneNumber("");
    setEmail("");
  }

  return (
    <>
      <h1>Hello !!</h1> 

     
      <form onSubmit={onSubmit}> 
        <div>
          <label htmlFor="nameInput">First Name:</label> 
          <input  
            type="text" 
            id="nameInput" 
            placeholder="Enter your first name" 
            onChange={(e) => setName(e.target.value)} 
            value={name} 
            required 
          />
        </div>

        <div>
          <label htmlFor="sirNameInput">Sir Name:</label> 
          <input  
            type="text" 
            id="sirNameInput" 
            placeholder="Enter your sir name" 
            onChange={(e) => setSirName(e.target.value)} 
            value={sirName} 
            required 
          />
        </div>

        <div>
          <label htmlFor="phoneInput">Phone Number:</label> 
          <input  
            type="tel" 
            id="phoneInput" 
            placeholder="Enter your phone number" 
            onChange={(e) => setPhoneNumber(e.target.value)} 
            value={phoneNumber} 
            required 
          />
        </div>

        <div>
          <label htmlFor="emailInput">Email:</label> 
          <input  
            type="email" 
            id="emailInput" 
            placeholder="Enter your email" 
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
            required 
          />
        </div>

        <button type="submit">Submit me 👍</button> 
      </form>
    </>
  );
}

export default App1;