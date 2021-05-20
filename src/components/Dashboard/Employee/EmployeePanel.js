import React, { useContext, useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import '../Employer/SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faGripHorizontal, faPlusCircle, faSignOutAlt, faTasks, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
import EmployeeAppliedJobs from './EmployeeAppliedJobs'
const EmployeePanel = () => {
    const [loggedInUser, setloggedInuser] = useContext(UserContext)
    return (
        <div className=''>
            <h5 className='text-center dashboardWel p-2' >Welcome Employee Dashboard <span className='text-brand'>{loggedInUser.displayName}</span></h5>
            <div className="container">
                <div className=' d-flex row'>
                    <Router>
                        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
                            <ul className="list-unstyled">
                                <li>
                                    <Link to="/dashboard/employeedashboard" className="text-white">
                                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/employee/appliedjobs' className="text-white">
                                        <FontAwesomeIcon icon={faFolder} /> <span>Applied Jobs</span>
                                    </Link>
                                </li>
                            </ul>
                            <div>
                                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <Switch>
                                <Route path="/employee/appliedjobs">
                                    <EmployeeAppliedJobs></EmployeeAppliedJobs>
                                </Route>
                                <Route exact path="/">
                                    <EmployeeAppliedJobs></EmployeeAppliedJobs>                                </Route>
                                <Route path="/dashboard/employeedashboard">
                                    <EmployeeAppliedJobs></EmployeeAppliedJobs>
                                </Route>
                            </Switch>
                        </div>
                    </Router>
                </div>
            </div>
        </div>
    );
};

export default EmployeePanel;
