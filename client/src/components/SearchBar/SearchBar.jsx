import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getAllCoasters } from '../../services/coasters.js';

const SearchBar = (props) => {
//   const [inventory, setInventory] = useState([])
//   const history = useHistory()

//   useEffect(() => {
//     const fetchCoaster = async () => {
//       const coaster = await getAllCoasters();
//       setInventory(coaster);
//     };
//     fetchCoaster();
//   })

//   const handleSubmit = event => {
//     event.preventDefault()
//     history.push('/search-coasters')
//   }

//   return (
//     <form className='search-form' onSubmit={handleSubmit}>
//   )
// }
  return (
    <h1>search</h1>
  )

export default SearchBar;