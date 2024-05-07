import React, { useState } from 'react';
import './App.css';


function DisplayComponent({ data }) {
  return (
    <div className="display-info">
      <h3>Entered information:</h3>
      <p>Your name: {data.firstName} {data.lastName}</p>
      <p>Your age: {data.age}</p>
      <p>Your gender: {data.gender}</p>
      <p>Your destination: {data.destination}</p>
      <p>Your dietary restrictions:</p>
      <ul>
        <li>Nuts free: {data.nutsFree ? 'Yes' : 'No'}</li>
        <li>Lactose free: {data.lactoseFree ? 'Yes' : 'No'}</li>
        <li>Vegan meal: {data.vegan ? 'Yes' : 'No'}</li>
      </ul>
    </div>
  );
}


function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    destination: '',
    lactoseFree: false,
    nutsFree: false,
    vegan: false
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    
  }

  return (
    <div className="form-container">
      <h1>Sample Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label>Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label>Age</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label>Gender</label>
          <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} /> Male
          <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} /> Female
        </div>
        <div className="input-group">
          <label>Destination</label>
          <select name="destination" value={formData.destination} onChange={handleChange}>
            <option value="">-- Please Choose a destination --</option>
            <option value="Japan">Japan</option>
            <option value="Las Vegas">Las Vegas</option>
            <option value="Paris">Paris</option>
            <option value="New York">New York</option>
          </select>
        </div>
        <div className="input-group">
          <label>Dietary Restrictions</label>
          <input type="checkbox" name="lactoseFree" checked={formData.lactoseFree} onChange={handleChange} /> Lactose Free
          <input type="checkbox" name="nutsFree" checked={formData.nutsFree} onChange={handleChange} /> Nuts Free
          <input type="checkbox" name="vegan" checked={formData.vegan} onChange={handleChange} /> Vegan
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      <DisplayComponent data={formData} />
    </div>
  );
}

export default App;
