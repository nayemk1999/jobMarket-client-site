import { Button, Container } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const AvailableJobsPage = () => {
    
    return (
        <div>
            <Container>
                <h1>This Is Employee Page</h1>
                <Link variant="contained" color="secondary" to='/applyJob'>Apply to that job</Link>
            </Container>

        </div>
    );
};

export default AvailableJobsPage;