import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllCoasters } from '../../services/coasters';
import { getAllParks } from '../../services/parks';


const Parks = ({parks, setParks}) => {
  const [coasters, setCoasters] = useState([]);
  

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
    <>
    <div>
      <Link to='/parkcreate/'>add a park</Link>
    </div>
    
    <div>
      
      {parks.map((park) => (
        <Link to={`/parks/${park.id}`}><p key={park.id}>{park.name}</p>
          
        </Link>
      ))}
     
    </div>
    </>
  )


}

export default Parks;

// {park.map((parks) => (
//     <p key={parks.id}>{parks.name}</p>
//   ))
// }