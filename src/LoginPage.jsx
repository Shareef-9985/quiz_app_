import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";

import './App.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [storedUsername, setStoredUsername] = useState(() => {
    return localStorage.getItem('username') || '';
  });
  const [storedPassword, setStoredPassword] = useState(() => {
    return localStorage.getItem('password') || '';
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    console.log('Logging in with:', { username, password });

    if(username===storedUsername && password===storedPassword){
    navigate('/home');
    setError('');
    }else{
      setError('No user found! please signup');
    }
  };

  return (
    <div className="auth-container">
      <div className='authcontainer'>
      <h2>USER LOGIN</h2>
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
        <div >
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


        <NavLink  to='/UForgotPass' style={{  color: '#30cfd0',textDecoration: 'none' }}>Forgot password  ? </NavLink>
<br /><br />
        <button type="submit">Login</button>
<br /><br />
        <p class="message">Don't have an account?  </p>
       

<NavLink  to='/RegisterPage' style={{    color: ' red',   textDecoration: 'none' }}>Sign Up </NavLink>
</div>
      </form>
     {/* <button class="button  arrow"> </button> */}
   </div>
    </div>
  
  );
};

export default LoginPage;
