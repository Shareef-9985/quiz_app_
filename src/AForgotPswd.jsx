


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const AForgotPswd = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (!email ||!password || !confirmPassword) {
      setError('Please fill all fields.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    console.log('Registering:', { email, password });
    navigate('/AdminLogin');
    setError('');
  };

  return (
    <div className="admin-container">
        <div className='authcontainer'>
      <h2>Reset your password</h2>
      <form onSubmit={handleRegister}>
        {error && <div className="error-message">{error}</div>}
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
        <button type="submit">Reset</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default AForgotPswd;

