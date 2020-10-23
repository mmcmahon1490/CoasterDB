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


// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import './CoasterEdit.css'

// const Coasteredit = (props) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     make: '',
//     model: '',
//     height: '',
//     speed: '',
//     inversions: ''
//   })

//   const { handleCoasterEdit, coasters }
//   const { id } = useParams();

//   useEffect(() => {
//     const prefilledForm = () => {
//       const { name, make, model, height, speed, inversions } = coasters.find === Name(id));
//       setFormData({ name, make, model, height, speed, inversions });
// }
// if (coasters.length) {
//       prefilledForm()
//     }
//   }, [coasters, id])

// const handleChange = (e) => {
//   const { name, value } = e.target;
//   setFormData({[name]: value})
//   }

//   return (
//       <form onSubmit={(e)=>{
//       e.preventDefault();
//       handleCoasterEdit(id, formData);
//       }}>
//         <h3>edit coaster form</h3>
//       <label>
//         name:
//       <input
//           type='text'
//           name='name'
//           value={formData.name}
//           onchange={handleChange}
//         />
//       </label>
//     </form>
//   )
// }

// export default Coasteredit;