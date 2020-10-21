import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home/Home'
import { getAllCoasters } from './services/coasters.js';

function App() {

  useEffect(() => {
    const getCoasters = async () => {
      const results = await getAllCoasters()
      console.log(results)
    }
    getCoasters()
  })
  

  return (
    <div className="App">
      <Home />
      
    </div>
  );
}

export default App;
