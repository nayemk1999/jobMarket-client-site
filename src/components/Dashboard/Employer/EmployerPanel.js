import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Dashboard, Home } from '@material-ui/icons';
import './SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faGripHorizontal, faPlusCircle, faSignOutAlt, faTasks, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
import JobPostForm from './JobPostForm';
import AddEmployer from './AddEmployer';
import EmployerDashboard from './EmployerDashboard';
const EmployerPanel = () => {
    const [loggedInUser, setloggedInuser] = useContext(UserContext)
    return (
        <div className=''>
            <h5 className='text-center dashboardWel p-2' >Welcome Admin Dashboard <span className='text-brand'>{loggedInUser.displayName}</span></h5>
            <div className="container">
                <div className=' d-flex row'>
                    <Router>
                        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
                            <ul className="list-unstyled">
                                <li>
                                    <Link to="/dashboard/employerdashboard" className="text-white">
                                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/admin/postjob' className="text-white">
                                        <FontAwesomeIcon icon={faFolder} /> <span>Posted Jobs</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/admin/' className="text-white">
                                        <FontAwesomeIcon icon={faPlusCircle} /> <span>Apply Candidate</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/admin/addemployer' className="text-white">
                                        <FontAwesomeIcon icon={faUserPlus} /> <span>Add Employer</span>
                                    </Link>
                                </li>
                                
                            </ul>
                            <div>
                                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <Switch>
                                <Route path="/admin/postjob">
                                    {/* <AddServicePlan /> */}
                                    <JobPostForm></JobPostForm>
                                </Route>
                                <Route path="/admin/orderList">
                                    {/* <OrdersList /> */}
                                </Route>
                                <Route path="/admin/addemployer">
                                    <AddEmployer></AddEmployer>
                                </Route>
                                <Route path="/admin">
                                    {/* <AdminPanel /> */}
                                </Route>
                                <Route path="/manageService">
                                    {/* <ManagePackage /> */}
                                </Route>
                                <Route exact path="/">
                                    {/* <Dashboard /> */}
                                </Route>
                                <Route path="/dashboard/employerdashboard">
                                    <EmployerDashboard></EmployerDashboard>
                                </Route>
                            </Switch>
                        </div>
                    </Router>
                </div>
            </div>
        </div>
    );
};

export default EmployerPanel;

// import React from 'react';
// import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Drawer from '@material-ui/core/Drawer';
// import Box from '@material-ui/core/Box';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import AllJobsPosted from './AllJobsPosted';
// import { mainListItems } from '../listItems';
// import { Link } from 'react-router-dom';

// function Copyright() {
//     return (
//         <Typography variant="body2" color="textSecondary" align="center">
//             {'Copyright © '}
//             {' '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }

// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//     },
//     toolbar: {
//         paddingRight: 24, // keep right padding when drawer closed
//     },
//     toolbarIcon: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'flex-end',
//         padding: '0 8px',
//         ...theme.mixins.toolbar,
//     },
//     appBar: {
//         zIndex: theme.zIndex.drawer + 1,
//         transition: theme.transitions.create(['width', 'margin'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//     },
//     appBarShift: {
//         marginLeft: drawerWidth,
//         width: `calc(100% - ${drawerWidth}px)`,
//         transition: theme.transitions.create(['width', 'margin'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     },
//     menuButton: {
//         marginRight: 36,
//     },
//     menuButtonHidden: {
//         display: 'none',
//     },
//     title: {
//         flexGrow: 1,
//     },
//     drawerPaper: {
//         position: 'relative',
//         whiteSpace: 'nowrap',
//         width: drawerWidth,
//         transition: theme.transitions.create('width', {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     },
//     drawerPaperClose: {
//         overflowX: 'hidden',
//         transition: theme.transitions.create('width', {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//         width: theme.spacing(7),
//         [theme.breakpoints.up('sm')]: {
//             width: theme.spacing(9),
//         },
//     },
//     appBarSpacer: theme.mixins.toolbar,
//     content: {
//         flexGrow: 1,
//         height: '100vh',
//         overflow: 'auto',
//     },
//     container: {
//         paddingTop: theme.spacing(4),
//         paddingBottom: theme.spacing(4),
//     },
//     paper: {
//         padding: theme.spacing(2),
//         display: 'flex',
//         overflow: 'auto',
//         flexDirection: 'column',
//     },
//     fixedHeight: {
//         height: 240,
//     },
// }));

// export default function EmployerPanel() {
//     const classes = useStyles();
//     const [open, setOpen] = React.useState(true);
//     const handleDrawerOpen = () => {
//         setOpen(true);
//     };
//     const handleDrawerClose = () => {
//         setOpen(false);
//     };
//     const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

//     return (
//         <div className={classes.root}>
//             <CssBaseline />
//             <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
//                 <Toolbar className={classes.toolbar}>
//                     <IconButton
//                         edge="start"
//                         color="inherit"
//                         aria-label="open drawer"
//                         onClick={handleDrawerOpen}
//                         className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
//                        Employer Dashboard Panel
//                     </Typography>
//                     <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
//                       <Link to='/login'>Make a Employer Admin</Link> 
//                     </Typography>
//                 </Toolbar>
//             </AppBar>
//             <Drawer
//                 variant="permanent"
//                 classes={{
//                     paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
//                 }}
//                 open={open}
//             >
//                 <div className={classes.toolbarIcon}>
//                     <IconButton onClick={handleDrawerClose}>
//                         <ChevronLeftIcon />
//                     </IconButton>
//                 </div>
//                 <Divider />
//                 <List>{mainListItems}</List>
//             </Drawer>
//             <main className={classes.content}>
//                 <div className={classes.appBarSpacer} />

//                 <Container maxWidth="lg" className={classes.container}>

//                     <Grid container spacing={3}>
//                         <Grid item xs={12}>
//                             <Paper className={classes.paper}>
//                                 <AllJobsPosted />
//                             </Paper>
//                         </Grid>
//                         {/* Chart */}
//                         <Grid item xs={12} md={8} lg={9}>
//                             <Paper className={fixedHeightPaper}>
//                                 {/* <Chart /> */}
//                             </Paper>
//                         </Grid>
//                         {/* Recent Deposits */}
//                         <Grid item xs={12} md={4} lg={3}>
//                             <Paper className={fixedHeightPaper}>
//                                 {/* <Deposits /> */}
//                             </Paper>
//                         </Grid>
//                         {/* Recent Orders */}

//                     </Grid>
//                     <Box pt={4}>
//                         <Copyright />
//                     </Box>
//                 </Container>
//             </main>
//         </div>
//     );
// }