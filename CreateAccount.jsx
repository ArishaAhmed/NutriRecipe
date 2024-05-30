import React, { useState } from "react";
import './CreateAccount.css';
import foodImage from './foodImage.jpeg';

function CreateAccount() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordError, setPasswordError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
      // Handle form submission here
    }
  };

  return (
    <div className="main-container">
      <img src={foodImage} alt="Food Background" className="food-background" />
      <div className="form-container">
        <h1 className="form-header">Create Account</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="first-name">First Name:</label>
          <input 
            type="text" 
            id="first-name" 
            name="firstName" 
            value={formData.firstName}
            onChange={handleChange} 
            placeholder="Enter your first name" 
            required 
          />
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange} 
            placeholder="Enter your email" 
            required 
          />
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={formData.password}
            onChange={handleChange} 
            placeholder="Enter your password" 
            autoComplete="current-password"
            required 
          />
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input 
            type="password" 
            id="confirm-password" 
            name="confirmPassword" 
            value={formData.confirmPassword}
            onChange={handleChange} 
            placeholder="Confirm your password"
            autoComplete="current-password"
            required 
          />
          {passwordError && <p className="error">{passwordError}</p>}
          <button type="submit" required >Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;

