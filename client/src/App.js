import React, { useState, useEffect } from 'react';
import { Route, useHistory, Switch } from 'react-router-dom';
import './App.css';
// import Home from './screens/Home/Home'
import { getAllCoasters } from './services/coasters.js';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';

import Register from './screens/Register/Register'
import Login from './screens/Login/Login'

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const getCoasters = async () => {
      const results = await getAllCoasters()
      console.log(results)
    }
    getCoasters()
  })
  
  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/')
  }

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/')
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  }

  return (
    <div className="App">
      <Switch>
        <Route path='/login'>
          <Login handleLogin={handleLogin} />
        </Route>
        <Route path='/register'>
          <Register handleRegister={handleRegister} />
        </Route>
        <Route path='/'>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
