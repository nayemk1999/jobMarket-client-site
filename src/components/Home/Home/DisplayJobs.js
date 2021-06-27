import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Box, Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ProgressBar from '../../ProgressBar';

function Copyright() {
  return (
    <Typography variant="body1" color="secondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: 275,
    marginTop: 20
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function DisplayJobs() {
  const [spacing, setSpacing] = React.useState(2);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  const [postedJob, setPostedJobs] = useState([]);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  useEffect(() => {
    fetch('https://jobmarketportal.herokuapp.com/alljobs')
      .then(res => res.json())
      .then(data => {
        setPostedJobs(data)
        setLoading(true)
      })
  }, [])

  return (
    <div>
      {
        loading && postedJob.length > 0 ?
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={spacing}>
                {postedJob.map(job => (
                  <Grid key={job} item>
                    <Card boxShadow={3} variant="outlined">
                      <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                          Codellion Job Post
                        </Typography>
                        <Typography variant="h5" component="h2">
                          {job.jobTitle}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                          {job.jobType}
                        </Typography>
                        <Typography variant="body2" component="p">
                          {job.skill}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button variant="contained" color="secondary" size="small"> <Link style={{ color: 'white' }} to={'/applyjob/' + job.jobTitle}>Apply Now</Link></Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          :
          <ProgressBar></ProgressBar>
      }

      <Box fontWeight="fontWeightBold" mt={4}>
        <Copyright />
      </Box>
    </div>
  );
}