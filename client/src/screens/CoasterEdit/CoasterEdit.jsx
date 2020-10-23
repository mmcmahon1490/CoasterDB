

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function CoasterEdit(props) {
  const [formData, setFormData] = useState({
    name: '',
    make: '',
    model: '',
    height: '',
    speed: '',
    inversions: ''
  })
  const { handleCoasterEdit, coasters } = props;
  const { id } = useParams();


  useEffect(() => {
    const prefillFormData = () => {
      const coaster = coasters.find(coaster => coaster.id === Number(id));
      setFormData(coaster);
    }
    if (coasters.length) {
      prefillFormData()
    }
  }, [coasters, id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleCoasterEdit(id, formData);
    }}>
      <h3>Edit Coaster</h3>
      <label>
        name:
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        make:
        <input
          type='text'
          name='make'
          value={formData.make}
          onChange={handleChange}
        />
      </label>
      <label>
        model:
        <input
          type='text'
          name='model'
          value={formData.model}
          onChange={handleChange}
        />
      </label>
      <label>
        height:
        <input
          type='text'
          name='height'
          value={formData.height}
          onChange={handleChange}
        />
      </label>
      <label>
        speed:
        <input
          type='text'
          name='speed'
          value={formData.speed}
          onChange={handleChange}
        />
      </label>
      <label>
        inversions:
        <input
          type='text'
          name='inversions'
          value={formData.inversions}
          onChange={handleChange}
        />
      </label>
      <button>edit</button>
    </form>
  )
}


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