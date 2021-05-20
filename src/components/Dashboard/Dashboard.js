import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import EmployerPanel from '../Dashboard/Employer/EmployerPanel'
import EmployeePanel from '../Dashboard/Employee/EmployeePanel'

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [admin, setAdmin] = useState([])
    useEffect(() => {
        const url = 'https://jobmarketportal.herokuapp.com/employer?email=' + loggedInUser.email
        fetch(url)
        .then(res => res.json())
        .then(data => setAdmin(data))
    }, [])
    return (
        <div>
            {
                admin.email ? <EmployerPanel></EmployerPanel>
                :
                <EmployeePanel></EmployeePanel>
            }
            
        </div>
    );
};

export default Dashboard;