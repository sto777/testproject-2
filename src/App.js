import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ATMMachine from './ATMMachine';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const handleLogin = (username, password) => {
    // Perform authentication logic here
    // Set the value of isAuthenticated based on the authentication result
    // For example:
    if (username === 'admin' && password === 'password') {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/atm-machine" /> : <LoginPage onLogin={handleLogin} />}
        />
        <Route
          path="/signup"
          element={<Navigate to="/login" />}
        />
        <Route
          path="/atm-machine"
          element={isAuthenticated ? <ATMMachine /> : <Navigate to="/login" />}

        />
      </Routes>
    </Router>
  );
};

export default App;
