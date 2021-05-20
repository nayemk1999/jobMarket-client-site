import React, { useContext, useEffect, useState } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { UserContext } from '../../../App';
import { Button } from '@material-ui/core';


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function EmployeeAppliedJobs() {
  const classes = useStyles();
  const [loggedInUser, setloggedInuser] = useContext(UserContext)
    const [employee, setEmployee] = useState([])
    useEffect(() => {
        const url = 'https://jobmarketportal.herokuapp.com/appliedcandidate?email=' + loggedInUser.email;
        fetch(url)
        .then(res => res.json())
        .then(data => setEmployee(data))
    }, [loggedInUser.email])
  return (
    <React.Fragment>
      <h1>Recent Your Job Applied</h1>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Apply Date</TableCell>
            <TableCell>Job Title</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employee.map((job) => (
            <TableRow key={job._id}>
              <TableCell>{(new Date(job.applyDate).toDateString('dd/MM/yyyy'))}</TableCell>
              <TableCell>{job.position}</TableCell>
              <TableCell>{job.name}</TableCell>
              <TableCell>{job.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}