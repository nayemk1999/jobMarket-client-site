import React from 'react';
import NavBar from '../../NavBar/NavBar';
import DisplayJobs from './DisplayJobs';

const Home = () => {
    return (
        <div>
            <NavBar />
            <DisplayJobs></DisplayJobs>
        </div>
    );
};

export default Home;