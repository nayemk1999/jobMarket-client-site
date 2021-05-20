import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Dashboard, Home } from '@material-ui/icons';
import './SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faGripHorizontal, faPlusCircle, faSignOutAlt, faTasks, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
import JobPostForm from './JobPostForm';
import AddEmployer from './AddEmployer';
import EmployerJobsPost from './EmployerJobsPost';
import AllCandidate from './AllCandidate';

const EmployerPanel = () => {
    const [loggedInUser, setloggedInuser] = useContext(UserContext)
    return (
        <div className=''>
            <h5 className='text-center dashboardWel p-2' >Welcome Admin Dashboard <span className='text-brand'>{loggedInUser.displayName}</span></h5>
            <div className="container">
                <div className=' d-flex row'>
                    <Router>
                        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
                            <ul className="list-unstyled">
                                <li>
                                    <Link to="/dashboard/employerdashboard" className="text-white">
                                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/employer/postjob' className="text-white">
                                        <FontAwesomeIcon icon={faFolder} /> <span>Posted Jobs</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/employer/allcandidate' className="text-white">
                                        <FontAwesomeIcon icon={faPlusCircle} /> <span>Apply Candidate</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/employer/addemployer' className="text-white">
                                        <FontAwesomeIcon icon={faUserPlus} /> <span>Add Employer</span>
                                    </Link>
                                </li>
                                
                            </ul>
                            <div>
                                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <Switch>
                                <Route path="/employer/postjob">
                                    <JobPostForm></JobPostForm>
                                </Route>
                                <Route path="/employer/allcandidate">
                                    <AllCandidate></AllCandidate>
                                </Route>
                                <Route path="/employer/addemployer">
                                    <AddEmployer></AddEmployer>
                                </Route>
                                <Route exact path="/">
                                </Route>
                                <Route path="/dashboard/employerdashboard">
                                    <EmployerJobsPost/>
                                </Route>
                            </Switch>
                        </div>
                    </Router>
                </div>
            </div>
        </div>
    );
};

export default EmployerPanel;
