import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ParkCreate.css'

const ParkCreate = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
  })
  const { handleParkCreate } = props;
  const { id } = useParams();

  console.log(id)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  // useEffect(() => {
  //   setFormData({...formData, park_id:id})
  // }, [])
  

  return (
    <form onSubmit={(e) =>{
      e.preventDefault();
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