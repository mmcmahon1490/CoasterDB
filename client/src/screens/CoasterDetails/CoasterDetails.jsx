import React, { useEffect, useState } from 'react';
import CoasterCards from './components/CoasterCards/CoasterCards';
// import { useParams } from 'react-router-dom';

// import { getOneCoaster } from '../services/foods';

// export default function CoasterDetails(props) {
//   const [coaster, setCoaster]
//   const [coasterId, setCoasterId] = useState('')
//   const { coasters } = props;
// }
// const { id } = useParams();

// useEffect(() => {
//   const fetchCoaster = async () => {
//     const myCoaster = await getOneCoaster(id);
//     setCoaster(myCoaster);
//   }
//   fetchCoaster();
// }, [id])

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const myCoaster = await addCoaster(id, coasterId);
//   setCoaster(myCoaster);
// }

// const handleChange = (e) => {
//   const { value } = e.target;
//   setCoasterId(value);
// }

// return (
//   <div>
//     {
//       coaster &&
//       <>
//         <h3>{coaster.name}</h3>
//         {park.coasters.map(coaster => (
//           <p key={coaster.id}>{coaster.name}</p>
//         ))}
//         <form onSubmit={handleSubmit}>
//             <select defaultValue='default' onChange={handleChange}>
//               {/* we can set a default value to tell people to select a flavor*/}
//               {/* the "defaultValue" on the <select> tag needs to match the "value" on our default <option> tag */}
//               {/* we also add the "disabled" in the <option> to prevent users from selecting it*/}
//               <option disabled value='default'>-- Select a flavor --</option>
//               {/* now we loop over all flavors and return an <option tag for each */}
//               {flavors.map(flavor => (
//                 // we track the flavor's id as the "value" which will get added to state onChange
//                 // the flavor's name goes between the open and close tag which is what the user sees
//                 <option value={flavor.id} key={flavor.id}>{flavor.name}</option>
//               ))}
//             </select>
//             <button>add</button>
//           </form>
//         </>
//       }
//     </div>
//   )
// }

const CoasterDetails = () => {
  return (
    <div>
      <CoasterCards />
    </div>
    
  )
}

export default CoasterDetails;