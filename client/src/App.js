import React, { useState, useEffect } from 'react';
import { Route, useHistory, Switch } from 'react-router-dom';
import './App.css';
// import Home from './screens/Home/Home'
import { getAllParks, destroyPark, postPark, putPark } from './services/parks';
import { destroyCoaster, getAllCoasters, getOneCoaster, postCoaster, putCoaster } from './services/coasters';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';

import Register from './screens/Register/Register'
import Login from './screens/Login/Login'
import CoasterCreate from './screens/CoasterCreate/CoasterCreate';
import CoasterEdit from './screens/CoasterEdit/CoasterEdit';
import CoasterCard from './screens/CoasterCard/CoasterCard';
import Parks from './screens/Parks/Parks';
import Home from './screens/Home/Home'
import SearchResults from './screens/SearchResults/SearchResults'
import ParkDetail from './screens/ParkDetail/ParkDetail'
import Footer from './components/shared/Footer/Footer'
import Header from './components/shared/Header/Header'
import Nav from './components/shared/Nav/Nav'

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [coaster, setCoaster] = useState();
  const history = useHistory();

  const [park, setPark] = useState({});
  // const [coasters, setCoasters] = useState([])

  

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData)
    }
    handleVerify();
  }, [])
  
  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/')
  };

  
  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/')
  };

  const handleCoasterCreate = async (coasterData) => {
    const newCoaster = await postCoaster(coasterData);
    setCoaster((prevState) => [...prevState, newCoaster]);
    history.push('/coasters');
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  };


  // const handleOneCoaster = async (id) => {
  //   const coasterData = await getOneCoaster(id)
  //   setCoaster(coasterData);
  // };

 

  // const fetchCoasters = async () => {
  //   const coasterData = await getAllCoasters();
  //   setCoasters(coasterData);
  // }


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
        <Route path='/create/:id'>
          <CoasterCreate handleCoasterCreate={handleCoasterCreate} />
        </Route>
        <Route path='/edit'>
          <CoasterEdit />
        </Route>
        <Route path='/parks/:id'>
          <ParkDetail />
        </Route>
        <Route path='/parks/'>
          <Parks />
        </Route>
        <Route path='/search'>
          <SearchResults />
        </Route>
        <Route path='/coaster/:id'>
          <CoasterCard />
        </Route>
        <Route path='/'>
        </Route>
      </Switch>
        <Footer />
    </div>
  );
}

export default App;
