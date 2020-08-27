import React from 'react';
import Projects from './Projects';
import About from '../components/About';
import Blogs from './Blogs'
import Avatar from '../components/Avatar';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  workContainer: {
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 100, 
      paddingRight: 100,
      maxWidth: 1920
    },
    [theme.breakpoints.between('md', 'lg')]: {
      maxWidth: 1200 
    },
    [theme.breakpoints.down('md')]: {
      width: '100%'
    },
    margin: 'auto'
  },
  divider: {
    margin: 'auto',
    width: '100%',
    padding: 1,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'white'
  },
  moreProjects: {
    padding: 20
  }
}));

const Main = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <NavBar/>
      <Grid style={{marginTop: 50, marginBottom: 10}} item xs={12}>
        <Avatar />
      </Grid>
      <Grid item xs={12}>
        <Typography style={{fontWeight: 'bold'}} variant="h3" align="center">
          Software Engineer
        </Typography>
        <Typography variant="h6" align="center">
          I am a problem solver who codes!
        </Typography>
      </Grid>
      <Grid className={classes.workContainer} item container>
        <Divider className={classes.divider} variant="middle" />
        <Projects/>
        <Divider className={classes.divider} variant="middle" />
        <Grid item xs={12}>
          <Blogs />
        </Grid>
        <Divider className={classes.divider} variant="middle" />
        <About />
        <Divider className={classes.divider} variant="middle" />
        <Footer />
      </Grid>
    </Grid>
  )
}

export default Main;