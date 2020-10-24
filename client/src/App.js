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
import ParkCreate from './screens/ParkCreate/ParkCreate'
import Footer from './components/shared/Footer/Footer'
import Header from './components/shared/Header/Header'
import Nav from './components/shared/Nav/Nav'

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [coaster, setCoaster] = useState();
  const [newPark, setNewPark] = useState();
  const history = useHistory();

  const [park, setPark] = useState({});
  const [coasters, setCoasters] = useState([]);
  const [parks, setParks] = useState([]);

  

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData)
      const allCoasters = await getAllCoasters();
      setCoasters(allCoasters)
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
    setCoasters((prevState) => [...prevState, newCoaster]);
    history.push('/parks');
  }

  const handleParkCreate = async (parkData) => {
    const newPark = await postPark(parkData);
    setParks((prevState) => [...prevState, newPark]);
    history.push('/parks/');
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  }

  const handleCoasterEdit = async (id, coasterData) => {
    console.log(id, coasterData)
    const updatedCoaster = await putCoaster(id, coasterData);
    setCoasters(prevState => prevState.map(coaster => {
      return coaster.id === Number(id) ? updatedCoaster : coaster
    }))
    history.push('/coaster/:id')
  }
  

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
          <Login
            currentUser={currentUser}
            handleLogin={handleLogin}
          />
        </Route>
        <Route path='/register'>
          <Register
            handleRegister={handleRegister}
          />
        </Route>
        <Route path='/create/:id'>
          <CoasterCreate
            handleCoasterCreate={handleCoasterCreate}
          />
        </Route>
        <Route path='/parkcreate/'>
          <ParkCreate
            handleParkCreate={handleParkCreate}
          />
        </Route>
        <Route path='/coaster/edit/:id'>
          <CoasterEdit
            coasters={coasters}
            handleCoasterEdit={handleCoasterEdit}
          />
        </Route>
        <Route path='/parks/:id'>
          <ParkDetail />
        </Route>
        <Route path='/parks/'>
          <Parks
            parks={parks}
            setParks={setParks}
          />
        </Route>
        <Route path='/search'>
          <SearchResults />
        </Route>
        <Route path='/park/:park_id/coaster/:id'>
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
