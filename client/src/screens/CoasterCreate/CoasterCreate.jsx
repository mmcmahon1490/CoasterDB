import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CoasterCreate.css'

const CoasterCreate = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    make: '',
    model: '',
    height: '',
    speed: '',
    inversions: ''
  })
  const { handleCoasterCreate } = props;
  const { id } = useParams();

  console.log(id)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  useEffect(() => {
    setFormData({...formData, park_id:id})
  }, [])
  

  return (
    <form onSubmit={(e) =>{
      e.preventDefault();
      handleCoasterCreate(formData);
    }}>
      <h3>create coaster form</h3>
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
      </label><label>
        model:
         <input
          type='text'
          name='model'
          value={formData.model}
          onChange={handleChange}
        />
      </label><label>
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
      <button>create</button>
      </form>
    
  )
}

export default CoasterCreate;

// import React, { useState } from 'react'

// export default function CoasterCreate(props) {
//   const [formData, setFormData] = useState({
//     name: '',
//     make: '',
//     model: '',
//     height: '',
//     speed: '',
//     inversions: ''
//   })
//   const { handleCoasterCreate } = props;

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value })
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value})
//   }

// return (
//   <form onSubmit={(e)=>{
//     e.preventDefault();
//       handleCoasterCreate(formData);
//     }}>
//       <h3>create coaster</h3>
//       <label>
//         name:
//         <input
//           type="text"
//           name='name'
//           value={formData.name}
//           onChange={handleChange}
//         />
//     </label>
//     <label>
//         make:
//         <input
//           type="text"
//           name='make'
//           value={formData.make}
//           onChange={handleChange}
//         />
//     </label>
//     <label>
//         model:
//         <input
//           type="text"
//           name='model'
//           value={formData.model}
//           onChange={handleChange}
//         />
//     </label>
//     <label>
//         height:
//         <input
//           type="text"
//           name='speed'
//           value={formData.height}
//           onChange={handleChange}
//         />
//     </label>
//     <label>
//         speed:
//         <input
//           type="text"
//           name='speed'
//           value={formData.speed}
//           onChange={handleChange}
//         />
//     </label>
//     <label>
//         inversions:
//         <input
//           type="text"
//           name='inversions'
//           value={formData.inversions}
//           onChange={handleChange}
//         />
//       </label>
//       <button>Create</button>
//     </form>
//   )
  
// }