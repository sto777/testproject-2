import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ATMMachine.css';
import ATMMachine from './ATMMachine';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login authentication here
    onLogin(username, password);
  };


    return (
    <div className={`atm-machine atm-machine--${ATMMachine}`}>
        <h1 className="atm-machine__title">ATM Machine</h1>
        <div className="atm-machine__login">
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
            <p>
          <button onClick={handleLogin}>Log In</button>
          </p>
        </div>
       
        <p>
          Don't have an account? <Link to="/Signup">Sign Up</Link> {/* Add the path to the Sign Up page here */}
        </p>
    </div>
       );
      }
    

export default LoginPage;
