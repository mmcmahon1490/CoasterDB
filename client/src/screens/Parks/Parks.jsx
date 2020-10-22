import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllCoasters, getOneCoaster } from '../../services/coasters';
import { getAllParks, getOnePark } from '../../services/parks';


const Parks = (props) => {
  const [coasters, setCoasters] = useState([]);
  const [parks, setParks] = useState([]);

  useEffect(() => {
    const getCoasters = async () => {
      const results = await getAllCoasters()
      setCoasters(results)
    }
    getCoasters()
  }, [])

  useEffect(() => {
    const getParks = async () => {
      const results = await getAllParks()
      setParks(results)
    }
    getParks()
  }, [])

  

  return (
    <div>
      {parks.map((park) => (
        <p key={park.id}>{park.name}</p>
      ))}
      <Link to='coastercard'>click here for coaster</Link>
      {coasters.map( (coaster) => (
        <Link to={`/coaster/${coaster.id}`}><p key={coaster.id}>{coaster.name}</p></Link>
      ))}
    </div>
  )
}

export default Parks;

// {park.map((parks) => (
//     <p key={parks.id}>{parks.name}</p>
//   ))
// }