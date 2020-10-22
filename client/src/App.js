import React, { useState, useEffect } from 'react';
import { Route, useHistory, Switch } from 'react-router-dom';
import './App.css';
// import Home from './screens/Home/Home'
import { getAllCoasters, getOneCoaster } from './services/coasters.js';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';

import Register from './screens/Register/Register'
import Login from './screens/Login/Login'
import CoasterCreate from './screens/CoasterCreate/CoasterCreate';
import CoasterEdit from './screens/CoasterEdit/CoasterEdit';
import Parks from './screens/Parks/Parks';
import Home from './screens/Home/Home'
import Footer from './components/shared/Footer/Footer'
import Header from './components/shared/Header/Header'
import Nav from './components/shared/Nav/Nav'
import SearchResults from './screens/SearchResults/SearchResults'

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();
  const [coaster, setCoaster] = useState({});

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


  const handleOneCoaster = async (id) => {
    const coasterData = await getOneCoaster(id)
    setCoaster(coasterData);
  }


  return (
    <div className="App">
      <Header />
        <Nav />
      <Switch>
      <Route path='/home'>
          <Home />
        </Route>
        <Route path='/login'>
          <Login handleLogin={handleLogin} />
        </Route>
        <Route path='/register'>
          <Register handleRegister={handleRegister} />
        </Route>
        <Route path='/create'>
          <CoasterCreate />
        </Route>
        <Route path='/edit'>
          <CoasterEdit />
        </Route>
        <Route path='/parks'>
          <Parks />
        </Route>
        <Route path='/search'>
          <SearchResults />
        </Route>
        <Route path='/'>
        </Route>
      </Switch>
        <Footer />
    </div>
  );
}

export default App;
