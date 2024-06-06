
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './LoginForm.css';
import foodImage from './foodImage.jpeg';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/profile');
    }
  }, [navigate]);

  const handleRegister = async (e) => {
    e.preventDefault();
    navigate('/register');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/login', { username, password });
      const access_token = response.data?.access_token;
      if (access_token) {
        localStorage.setItem('token', access_token);
        setMessage('Login successful');
        navigate('/');
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
    navigate('/login');
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <img src={foodImage} alt="Food Background" className="food-background" />
      <div className="login-form">
        <h1>Login into your Account</h1>
        <form onSubmit={handleLogin}>
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
          <button type="submit">Login</button>
          <button onClick={handleRegister}>Create Account</button>
        </form>
        {message && <p className="message">{message}</p>}

      </div>
    </div>
  );
}

export default LoginForm;
