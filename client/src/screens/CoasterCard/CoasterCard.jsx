// import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { getOneCoaster } from '../services/coasters';

// export default function CoasterCard() {
//   const [coaster, setCoaster] = useState(null);
//   const [parkId, setParkId] = useState('')
//   const { parks } = props;

//   useEffect(() => {
//     const getCoaster = async () => {
//       const pickCoaster = await getOneCoaster(id);
//       setCoaster(pickCoaster);
//     }
//     getCoaster();
//   }, [id])

//   return (
//     <div>

//       <h3>{coaster.name}</h3>


//     <h2>coaster card!</h2>
//       <Link to='edit'>edit coaster</Link>
//       <button>delete</button>
//       </div>
//   )
// }

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneCoaster } from '../../services/coasters';
import { Link } from 'react-router-dom';

const CoasterCard = () => {
  const [coaster, setCoaster] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const getCoaster = async() => {
      const coaster = await getOneCoaster(id);
      setCoaster(coaster);
    }
    getCoaster();
  }, [id])

  console.log(coaster.name)

  return (
    <div>
    <Link to='/edit'>edit button</Link>
      <h1>{coaster.name}</h1>
      <div className='coaster-details'>
        <p>{coaster.name}</p>
        <p>{coaster.make}</p>
        <p>{coaster.model}</p>
        <p>{coaster.height} feet</p>
        <p>{coaster.speed} mph</p>
        <p>{coaster.inversions}</p>
      </div>

      </div>
  )
}

export default CoasterCard;