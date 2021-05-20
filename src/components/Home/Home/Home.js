import React from 'react';
import DashboardNavbar from '../../Dashboard/DashboardNavbar/DashboardNavbar';
import DisplayJobs from './DisplayJobs';

const Home = () => {
    return (
        <div>
            <h1>This Home Page............</h1>
            <DashboardNavbar></DashboardNavbar>
            <DisplayJobs></DisplayJobs>
        </div>
    );
};

export default Home;