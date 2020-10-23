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

import React, { useEffect, useState } from "react";
import { destroyCoaster, getOneCoaster } from "../../services/coasters";
import { Link, useHistory, useParams } from "react-router-dom";


const CoasterCard = () => {
  const [coaster, setCoaster] = useState(null);
  const { id, park_id } = useParams();
  const history  = useHistory();

  useEffect(() => {
    const getCoaster = async () => {
      const coaster = await getOneCoaster(id);
      setCoaster(coaster);
    };
    getCoaster();
  }, [id]);

  const deleteCoaster = (id) => {
    destroyCoaster(id)
    history.push(`/parks/${park_id}`)
  }

  return (
    <div>
      {coaster && (
        <>
          <Link to={`/coaster/edit/${coaster.id}`}>edit button</Link>
          <h1>{coaster.name}</h1>
          <button onClick={()=>deleteCoaster(coaster.id)}>delete</button>

          <div className="coaster-details">
            {/* <p>{coaster.name}</p>
            <p>{coaster.make}</p>
            <p>{coaster.model}</p>
            <p>{coaster.height} feet</p>
            <p>{coaster.speed} mph</p>
            <p>{coaster.inversions}</p> */}

            <p>{coaster.name} is a {coaster.model} Coaster
            manufactured by {coaster.make}.
            {coaster.name} is {coaster.height} feet tall,
            goes {coaster.speed} mph,
            and has {coaster.inversions} inversions.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default CoasterCard;
