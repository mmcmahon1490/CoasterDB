import React, { useEffect, useState } from 'react';
import './ParkCreate.css'

const ParkCreate = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
  })
  const { handleParkCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }
  

  return (
    <form onSubmit={(e) =>{
      e.preventDefault();
      console.log(formData);
      handleParkCreate(formData);
    }}>
      <h3>create park form</h3>
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
        location:
         <input
          type='text'
          name='location'
          value={formData.location}
          onChange={handleChange}
        />
      </label>
      <button>create</button>
      </form>
  )
}

export default ParkCreate;