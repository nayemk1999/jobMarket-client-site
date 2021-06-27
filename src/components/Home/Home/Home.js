import React from 'react';
import DisplayJobs from '../../DisplayJobs/DisplayJobs';
import NavBar from '../../NavBar/NavBar';
// import DisplayJobs from './DisplayJobs';

const Home = () => {
    return (
        <div>
            <NavBar />
            {/* <DisplayJobs></DisplayJobs> */}
            <DisplayJobs/>
        </div>
    );
};

export default Home;