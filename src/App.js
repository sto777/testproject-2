import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ATMMachine from './ATMMachine';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

useEffect(() => {
    // Check if there is a stored authentication state
    const storedAuthState = localStorage.getItem('isAuthenticated');
    if (storedAuthState) {
      setIsAuthenticated(JSON.parse(storedAuthState));
    }
  }, []);

  const handleLogin = (username, password) => {
    // Perform authentication logic here
    // Set the value of isAuthenticated based on the authentication result
    // For example:
    if (username === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
localStorage.setItem('isAuthenticated', true);
    } else {
      alert('incorrect password');
localStorage.setItem('isAuthenticated', true);
    }
  };

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.setItem('isAuthenticated', true);
    }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/atm-machine" /> : <LoginPage onLogin={handleLogin} />}
        />
        <Route
          path="/signup"
          element={<SignUpPage />}
        />
        <Route
          path="/atm-machine"
          element={isAuthenticated ? <ATMMachine logOut={handleLogout} /> : <Navigate to="/" />}

        />
      </Routes>
    </Router>
  );
};

export default App;
