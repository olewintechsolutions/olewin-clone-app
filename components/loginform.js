// src/components/LoginForm.js
import splashlogo from '../images/olewin1.svg';

import React, { useState } from 'react';
const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement your login logic here
    // For a simple example, you can just log the form data to the console
    console.log('Login form submitted:', formData);
  };

  return (
    <div className='formcont' >
      <img src={splashlogo} alt="Olewin" />
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='emailcont'>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder='Email ID'
            value={formData.email}
            onChange={handleChange}
            
          />
        </div>
        <div className='passcont'>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
        <div className='listviewbtn1'>
            <button className='creatac' type="create" onClick={''}>Create Account</button>
        </div>
        <div className='listviewbtn2'>
        <button className='signbtn'  type="signup" onClick={''}>SignUp</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;


