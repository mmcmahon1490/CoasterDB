import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <Link to='/parks'>find a park</Link>
      <Link to='/search'>search</Link>
      <Link to='/test-screen'>Test Screen</Link>
    </nav>
  )
}

export default Nav;