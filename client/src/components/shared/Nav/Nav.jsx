import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <Link to='/parks'>find a park</Link>
      <Link to='/search'>search</Link>
    </nav>
  )
}

export default Nav;