import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
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
            <Slider {...settings}>
                    {
                        postedJob.map(propsData => <DisplayJob propsData={propsData} />)
                    }

            </Slider>
        </Container>
    );
};

export default DisplayJobs;