import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home/Home'
import Login from'./screens/Login/Login'

function App() {

  

  return (
    <div className="App">
      <Switch>
        <Route path='/Home' />
        <Route path='/login' />
          
      </Switch>
      
    </div>
  );
}

export default App;
