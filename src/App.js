import './App.css'
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';
export const UserContext = createContext()
const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          {/* <PrivateRoute path='/dashboard'>
            <Dashboard />
          </PrivateRoute> */}
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;