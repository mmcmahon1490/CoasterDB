import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
  
    <div className='title-card'>
      <h1>roller coaster db</h1>
      <Link to='/home'>roller coaster db</Link>
    
      <Link to='/Login'>login</Link>

    </div>
  )
}

export default Header;