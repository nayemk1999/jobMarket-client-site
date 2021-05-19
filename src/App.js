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
import 'bootstrap/dist/css/bootstrap.min.css';
import ApplyJobForm from './components/Dashboard/Employee/ApplyJobForm';
import JobPostForm from './components/Dashboard/Employer/JobPostForm';
import LoginPage from './components/LoginPage/LoginPage';
import RegistrationPage from './components/LoginPage/Registration/RegistrationPage';
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
          <PrivateRoute path='/applyJob'>
            <ApplyJobForm />
          </PrivateRoute>
          <Route path='/jobPost'>
            <JobPostForm />
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <Route path='/registration'>
            <RegistrationPage />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;