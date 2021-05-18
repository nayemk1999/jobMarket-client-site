import React from 'react';
import EmployerPanel from '../Dashboard/Employer/EmployerPanel'
import AvailableJobsPage from './Employee/AvailableJobsPage';

const Dashboard = () => {
    return (
        <div>
            <EmployerPanel></EmployerPanel>
            <AvailableJobsPage></AvailableJobsPage>
        </div>
    );
};

export default Dashboard;