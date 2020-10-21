import React, { useState, useEffect } from 'react';
import HomeLayout from '../../components/shared/HomeLayout/HomeLayout';
import './Home.css'

const Home = () => {
  return (
    <HomeLayout>
      <div className='home-text-container'>
        <h3>go cats</h3>
      </div>
    </HomeLayout>
    
  )
}

export default Home;