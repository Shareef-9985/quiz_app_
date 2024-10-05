import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";

import './App.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    console.log('Logging in with:', { username, password });
    navigate('/AdminDashboard');
    setError('');
  };

  return (
    <div className='admin-container'>
      <div className='authcontainer'>
      <h2>ADMIN LOGIN</h2>
      <form onSubmit={handleLogin}>
        {error && <div className="error-message">{error}</div>}
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

        <div className="bottom">


        <NavLink  to='/AForgotPswd' style={{  color: '#0d4770', fontWeight: 'bold' , textDecoration: 'none' }}>Forgot password  ? </NavLink>
<br /><br />
        <button type="submit">Login</button>

        
       


</div>
      </form>
    </div>
    </div>
  );
};

export default AdminLogin;
