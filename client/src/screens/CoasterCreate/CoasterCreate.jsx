import React, { useState } from 'react'

export default function CoasterCreate(props) {
  const [formData, setFormData] = useState({
    name: ''
  })
  const { handleCoasterCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ [name]: value })
  }
return (
  <form onSubmit={(e)=>{
    e.preventDefault();
      handleCoasterCreate(formData);
    }}>
      <h3>Create Coaster</h3>
      <label>
        Name:
        <input
          type="text"
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <button>Create</button>
    </form>
  )
  
}