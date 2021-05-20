import React, { useContext, useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Button, Container, CssBaseline } from '@material-ui/core';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';
import { getDefaultNormalizer } from '@testing-library/dom';

export default function JobPostForm() {
    const [jobTitle, setJobTitle] = useState('');
    const [jobType, setJobType] = useState('');
    const [city, setCity] = useState('');
    const [vacancy, setVacancy] = useState('');
    const [description, setDescription] = useState('');
    const [skill, setSkill] = useState('');
    const [salary, setSalary] = useState('');
    const history = useHistory()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const handleSubmit = e => {
        e.preventDefault();
        const jobPostData = {
            jobTitle: jobTitle,
            jobType: jobType,
            city: city,
            vacancy: vacancy,
            description: description,
            skill: skill,
            salary: salary,
            postDate: new Date(),
            email: loggedInUser.email || 'admin@email.com',
            
        }
        fetch('http://localhost:3500/addjobpost', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(jobPostData)
        })
         .then(res => {
                if (res) {
                    alert('SuccessFully Posted Job')
                    history.push('/dashboard')
                }
            })

    };
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Typography component="h1" variant="h5">
                Job Post Form
            </Typography>
            <form onSubmit={handleSubmit} action="">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="name"
                            name="name"
                            label="Job Title"
                            fullWidth
                            autoComplete="Job Title"
                            onChange={e => setJobTitle(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="jobType"
                            name="jobType"
                            label="Job Type"
                            fullWidth
                            onChange={e => setJobType(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="city"
                            name="city"
                            label="City"
                            fullWidth
                            onChange={e => setCity(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="vacancy"
                            name="vacancy"
                            label="Number Of Opening"
                            type='number'
                            fullWidth
                            onChange={e => setVacancy(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            rowsMin={3}
                            id="description"
                            type='textarea'
                            name="description"
                            label="Job Description"
                            fullWidth
                            onChange={e => setDescription(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="skill"
                            name="skill"
                            type='textarea'
                            label="Skill Required"
                            fullWidth
                            onChange={e => setSkill(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="salary"
                            type='number'
                            name="salary"
                            label="CTC (Cost to Company) USD per Year."
                            fullWidth
                            onChange={e => setSalary(e.target.value)}
                        />
                    </Grid>

                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Post Now
          </Button>
            </form>

        </Container>

    );
}