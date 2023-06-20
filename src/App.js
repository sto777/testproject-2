import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ATMMachine from './ATMMachine';
import LoginPage from './LoginPage';
import SignUp from './SignUp';

const App = () => {
  const isAuthenticated = /* check if user is authenticated */ false;

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          {isAuthenticated ? <Redirect to="/atm" /> : <LoginPage />}
        </Route>
        <Route exact path="/signup">
          {isAuthenticated ? <Redirect to="/atm" /> : <SignUp />}
        </Route>
        <Route exact path="/atm">
          {isAuthenticated ? <ATMMachine /> : <Redirect to="/signup" />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
