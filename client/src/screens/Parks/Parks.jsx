import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllCoasters, getOneCoaster } from '../../services/coasters';
import { getAllParks, getOnePark } from '../../services/parks';


const Parks = (props) => {
  const [coaster, setCoaster] = useState([]);
  const [park, setPark] = useState([]);

  useEffect(() => {
    const getCoasters = async () => {
      const results = await getAllCoasters()
      setCoaster(results)
    }
    getCoasters()
  }, [])

  useEffect(() => {
    const getParks = async () => {
      const results = await getAllParks()
      setPark(results)
    }
    getParks()
  }, [])

  

  return (
    <div>
      {park.map((parks) => (
        <p key={parks.id}>{parks.name}</p>
      ))}
      <Link to='coastercard'>click here for coaster</Link>
      {coaster.map( (coasters) => (
        <Link to={`/coaster/{coaster.id}`}><p key={coasters.id}>{coasters.name}</p></Link>
      ))}
    </div>
  )
}

export default Parks;

// {park.map((parks) => (
//     <p key={parks.id}>{parks.name}</p>
//   ))
// }