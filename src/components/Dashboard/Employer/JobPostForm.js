// import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import { useForm } from 'react-hook-form';
// import { FormControl } from '@material-ui/core';

// function Copyright() {
//     return (
//         <Typography variant="body2" color="textSecondary" align="center">
//             {'Copyright © '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }

// const useStyles = makeStyles((theme) => ({
//     paper: {
//         marginTop: theme.spacing(8),
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//     },
//     avatar: {
//         margin: theme.spacing(1),
//         backgroundColor: theme.palette.secondary.main,
//     },
//     form: {
//         width: '100%', // Fix IE 11 issue.
//         marginTop: theme.spacing(3),
//     },
//     submit: {
//         margin: theme.spacing(3, 0, 2),
//     },
// }));

// export default function JobPostForm() {
//     const classes = useStyles();
//     const { register, handleSubmit, watch, formState: { errors } } = useForm();
//     const onSubmit = data => console.log(data);
//     return (
//         <Container component="main" maxWidth="xs">
//             <CssBaseline />
//             <div className={classes.paper}>
//                 <Avatar className={classes.avatar}>
//                     <LockOutlinedIcon />
//                 </Avatar>
//                 <Typography component="h1" variant="h5">
//                     Job Post Form
//         </Typography>
//                 <FormControl>
//                     <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
//                         <label>Job Title</label> <br />
//                         <input id="title" {...register("title", { required: true })} /><br />
//                         <label>Job Type</label>
//                         <select {...register("jobType")}>
//                             <option value="in-office">In-Office</option>
//                             <option value="remote">Remote</option>
//                         </select><br />
//                         <label>City</label><br />
//                         <select {...register("city")}>
//                             <option value="USA">USA</option>
//                             <option value="india">India</option>
//                             <option value="bangladesh">Bangladesh</option>
//                             <option value="germany">Germany</option>
//                             <option value="others">Others</option>
//                         </select><br />
//                         <label for='jobOpenNumber'>Number Of Opening</label><br />
//                         <input id='jobOpenNumber' type='number' {...register("jobOpenNumber", { required: true })} /> <br />
//                         <label>Job Description</label><br />
//                         <textarea rows="4" cols="50" name="comment" {...register("description", { required: true })} form="usrform">Enter description here...</textarea>
//                         <label>Skill</label><br />
//                         <textarea defaultValue='Enter Skill here...' {...register("skill", { required: true })}  rows="4" cols="50" form="usrform"></textarea>
//                         <label>CTC (Cost to Company)</label> <br />
//                         <input type='number' {...register("cost", { required: true })} /> <br />

//                         {errors.exampleRequired && <span>This field is required</span>}
//                         <input type="submit" />
//                     </form>
//                 </FormControl>
//             </div>
//             <Box mt={5}>
//                 <Copyright />
//             </Box>
//         </Container>
//     );
// }

import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Button, Container, CssBaseline, TextareaAutosize } from '@material-ui/core';

export default function JobPostForm() {
    const [jobTitle, setJobTitle] = useState('');
    const [jobType, setJobType] = useState('');
    const [city, setCity] = useState('');
    const [vacancy, setVacancy] = useState('');
    const [description, setDescription] = useState('');
    const [skill, setSkill] = useState('');
    const [salary, setSalary] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const jobPostData = {
            jobTitle: jobTitle,
            jobType: jobType,
            city: city,
            vacancy: vacancy,
            description: description,
            skill: skill,
            salary: salary
        }
        console.log(jobPostData);
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
                            label="CTC (Cost to Company)"
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