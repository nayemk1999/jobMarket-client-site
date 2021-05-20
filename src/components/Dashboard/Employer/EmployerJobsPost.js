import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const EmployerJobsPost = () => {
    const [Jobs, setJobs] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('https://jobmarketportal.herokuapp.com/alljobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data)
                setLoading(true)
            })
    }, [])
    return (
        <div>
            <h2 className="fw-bold  text-center" style={{ color: 'crimson' }}>Posted Job Details:</h2>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col"> Job Title</th>
                        <th scope="col">Job Type</th>
                        <th scope="col">CTC</th>
                        <th scope="col">City</th>
                        <th scope="col">Vacancy</th>
                        <th scope="col">Skill</th>
                    </tr>
                </thead>
                <tbody>
                    {loading && Jobs.length > 0 ?
                        Jobs.map(job =>
                            <tr class="table-success">
                                <td>{job.jobTitle}</td>
                                <td>{job.jobType}</td>
                                <td>{job.salary}</td>
                                <td>{job.city}</td>
                                <td>{job.vacancy}</td>
                                <td>{job.skill}</td>
                            </tr>
                        )
                        :
                        <div className="text-center m-auto">
                            {loading ?
                                <h4 className="mt-1 text-brand">You haven't placed any Job yet. Please Post and come to this page.</h4>
                                :
                                <div class="spinner-border text-brand" style={{ width: '2rem', height: '2rem', marginTop: '30%', marginLeft: '120%' }} role="status">
                                </div>
                            }
                        </div>

                    }
                </tbody>
            </table>
            <h2 className="fw-bold mt-5 text-center" style={{ color: 'black' }}>Total Your Job Posted: <span className='text-danger'>{Jobs.length}</span></h2>

        </div>
    );
};

export default EmployerJobsPost;