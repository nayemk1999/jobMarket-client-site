import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        marginTop: 30,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function DisplayJob(props) {
    const { jobTitle, city, description, email, salary, skill, vacancy, _id, postDate } = props.propsData
    console.log(props);
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        A
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={jobTitle}
                subheader={(new Date(postDate).toDateString('dd/MM/yyyy'))}
            />
            <CardMedia
                className={classes.media}
                image="https://www.rarecells.com/wp-content/uploads/2020/02/WERE-HIRING.png"
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {city}
                </Typography>
            </CardContent>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    <Button variant="contained" color="secondary" size="medium"> <Link style={{ color: 'white' }} to={'/applyjob/' + jobTitle}>Apply Now</Link></Button>
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Job Info:</Typography>
                    <Typography paragraph>
                        Description <br />
                        {description}
                    </Typography>
                    <Typography paragraph>
                        Skill <br />
                        {skill}
                    </Typography>
                    <Typography paragraph>
                        Vacancy <br />
                        {vacancy}
                    </Typography>
                    <Typography>
                        Salary <br />
                        {salary}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}