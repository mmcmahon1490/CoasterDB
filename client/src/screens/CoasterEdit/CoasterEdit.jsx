// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// export default function CoasterEdit(props) {
//   const [formData, setFormData] = useState({
//     name: ''
//   })
//   const { handleCoasterEdit, coasters } = props;
//   const { id } = useParams();

//   useEffect(() => {
//     const prefillFormData = () => {
//       const { name } = coasters.find(coaster => coaster.id === Number(id));
//       setFormData({ name });
//     }
//     if (coasters.length) {
//       prefillFormData()
//     }
//   }, [coasters, id])

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ [name]: value })
//   }

//   return (
//     <form onSubmit={(e) => {
//       e.preventDefault();
//       handleCoasterEdit(id, formData);
//     }}>
//       <h3>Edit Coaster</h3>
//       <label>
//         Name:
//         <input
//           type="text"
//           name='name'
//           value={formData.name}
//           onChange={handleChange}
//         />
//       </label>
//       <button>edit</button>
//     </form>
//   )
// }


import React, { useState, useEffect } from 'react';
import './CoasterEdit.css'

const Coasteredit = () => {
  return (
      <div className='Coasteredit-container'>
        <h3>edit coaster form</h3>
      </div>
    
  )
}

export default Coasteredit;