import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/register', { username, password });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error registering user');
    }
  };

  const handleLogin = async () => {
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

  return (
    <div className="App">
      <h1>Authentication with Flask and React</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={handleProtectedResource}>Protected Resource</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
