import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
  
    <div className='title-card'>
      <h1>roller coaster db</h1>
      <Link to='/home'>roller coaster db</Link>
    <h4>space eater</h4>
    
      <Link to='/Login'>login</Link>
      <h6>end of header</h6>
      <h6>beginning of navbar</h6>
      <h6>content below</h6>

    </div>
  )
}

export default Header;