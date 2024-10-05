import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const allowedDomains = ['gmail.com', 'yahoo.com', 'outlook.com']; // Allowed domains
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Check general format
    if (!regex.test(email)) {
      return false; 
    }
    
    // Extract domain and check if it's in the allowed list
    const domain = email.split('@')[1];
    return allowedDomains.includes(domain);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // Custom validation
    if (!username || !email || !password || !confirmPassword) {
      setError('Please fill all fields.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    console.log('Registering:', { username, email, password });
    navigate('/loginPage');
    setError(''); // Clear error on successful registration
  };

  return (
    <div className="auth-container">
      <div className='authcontainer'>
      <h2>SIGN UP</h2>
      <form onSubmit={handleRegister}>
        {error && <div className="error-message">{error}</div>}
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className='bottom'>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default RegisterPage;
