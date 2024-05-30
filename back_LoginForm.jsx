
import React, { useState } from 'react';
import './index.css';
import foodImage from './foodImage.jpeg';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
function MyComponent() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/register', { username, password });
      console.log(response);
      setMessage(response.data.message);
    } catch (error) {
      console.log(error);
      setMessage(error.response?.data?.message || 'Error registering user');
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/login', { username, password });
      const access_token = response.data?.access_token;
      if (access_token) {
        localStorage.setItem('token', access_token);
        setMessage('Login successful');
      } else {
        setMessage('Error logging in');
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error logging in');
    }
  };
  const handleLogout = () => {
    localStorage.removeItem('token');
    setMessage('Logged out');
  };
  const handleProtectedResource = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://127.0.0.1:5000/secure', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error accessing protected resource');
    }
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="login-container">
      <img src={foodImage} alt="Food Background" className="food-background" />
      <div className="login-form">
        <h1>Login into your Account</h1>
        <form>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <i
              className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} password-toggle`}
              onClick={toggleShowPassword}
            />
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="remember-me" name="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <a href="#">Forgot Password?</a>
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleRegister}>Create Account</button>
        </form>
        <button onClick={handleLogout}>Logout</button>
        {message && <p>{message}</p>} {/* Display message if exists */}
      </div>
    </div>
  );
}
export default MyComponent;
