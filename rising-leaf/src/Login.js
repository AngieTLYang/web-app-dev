import React, { useState } from 'react';
import axios from 'axios'; // Import axios for HTTP requests
import './Login.css'; // Import CSS for styling

const Login = () => {
  const [formType, setFormType] = useState('login'); // State to switch between login and register forms
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState(''); // For registration
  const [error, setError] = useState('');
  const [token, setToken] = useState('');

  const handleLoginSubmit = async (e) => {
    console.log('handleLoginSubmit');
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password
      });
      console.log("post('http://localhost:5000/api/users/login', {email, password})");
      
      setToken(response.data.token);
      console.log('Login successful! Token:', response.data.token);
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred');
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/users/register', {
        username,
        email,
        password
      });

      setFormType('login'); // Switch to login form after successful registration
      console.log('Registration successful!');
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="login-container">
      <h2>{formType === 'login' ? 'Login' : 'Register'}</h2>
      <form onSubmit={formType === 'login' ? handleLoginSubmit : handleRegisterSubmit}>
        {formType === 'register' && (
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">{formType === 'login' ? 'Login' : 'Register'}</button>
        {error && <p className="error-message">{error}</p>}
      </form>
      <button onClick={() => setFormType(formType === 'login' ? 'register' : 'login')}>
        Switch to {formType === 'login' ? 'Register' : 'Login'}
      </button>
    </div>
  );
};

export default Login;
