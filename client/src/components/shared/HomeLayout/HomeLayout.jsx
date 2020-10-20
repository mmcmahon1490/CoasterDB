import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import './HomeLayout.css';

const HomeLayout = () => {
  return (
    <div className='home-layout'>
      <Nav />
      <Footer />
    </div>
  )
}

export default HomeLayout