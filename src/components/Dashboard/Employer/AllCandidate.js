import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button } from '@material-ui/core';


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function AllCandidate() {
  const [loading, setLoading] = useState(false);
  const [candidates, setCandidates] = useState([]);
  useEffect(() => {
    fetch('https://jobmarketportal.herokuapp.com/allcandidate')
      .then(res => res.json())
      .then(data => {
        setLoading(true)
        setCandidates(data)
      })
  })
  return (
    <React.Fragment>
      <h1>Recent Job Post</h1>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Apply Date</TableCell>
            <TableCell>Job Title</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Resume</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading && candidates.length > 0 ?
            candidates.map((candidate) => (
              <TableRow key={candidate._id}>
                <TableCell>{(new Date(candidate.applyDate).toDateString('dd/MM/yyyy'))}</TableCell>
                <TableCell>{candidate.position}</TableCell>
                <TableCell>{candidate.name}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary">Resume Download</Button>
                </TableCell>
              </TableRow>
            ))
            :
            <div className="text-center m-auto">
              {loading ?
                <h4 className="mt-1 text-brand"> No one applied yet.</h4> :
                <div class="spinner-border text-brand" style={{ width: '2rem', height: '2rem', marginTop: '30%', marginLeft: '120%' }} role="status">
                </div>
              }
            </div>
          }
        </TableBody>
      </Table>
    </React.Fragment>
  );
}