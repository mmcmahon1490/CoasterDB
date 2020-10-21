import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home/Home'
import { getAllCoasters } from './services/coasters.js';

import Register from './screens/Register/Register'
import Login from './screens/Login/Login'

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
      <Register />
      <Login />
    </div>
  );
}

export default App;
