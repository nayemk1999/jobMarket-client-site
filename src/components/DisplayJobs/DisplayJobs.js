import { Box, Container, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import ProgressBar from '../ProgressBar';
import DisplayJob from './DisplayJob';
import './DisplayJobs.css'
const DisplayJobs = () => {
    const [loading, setLoading] = useState(false);
    const [postedJob, setPostedJobs] = useState([]);

    useEffect(() => {
        fetch('https://jobmarketportal.herokuapp.com/alljobs')
            .then(res => res.json())
            .then(data => {
                setPostedJobs(data)
                setLoading(true)
            })
    }, [])

    function Copyright() {
        return (
            <Typography variant="body1" color="secondary" align="center">
                {'Copyright © '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }
    const settings = {
        className: "text-center",
        centerMode: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 3,
        speed: 500,
        rows: 2,
        slidesPerRow: 1
    };
    return (
        <Container>
            {
                loading && postedJob.length ?
                    <Slider {...settings}>
                        {
                            postedJob.map(propsData => <DisplayJob propsData={propsData} />)
                        }

                    </Slider>
                    :
                    <ProgressBar></ProgressBar>
            }


            <Box fontWeight="fontWeightBold" mt={4}>
                <Copyright />
            </Box>
        </Container>
    );
};

export default DisplayJobs;