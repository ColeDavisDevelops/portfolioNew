import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  title: {
    width: '100%',
    fontWeight: 'bold',
    textDecoration: 'underline'
  },
  question: {
    fontWeight: 'bold'
  },
  container: {
    [theme.breakpoints.down('md')]: {
      padding: 20
    }
  },
  text: {
    color: 'rgb(170, 170, 170)',
    [theme.breakpoints.down('lg')]: {
      fontSize: 15 
    }
  }
}));

const About = () => {
  const classes = useStyles();
  
  return (
    <>
      <Typography className={classes.title} align="center" variant="h3">
        About
      </Typography>
      <Grid className={classes.container} item container spacing={2}>
        <Grid container item>
          <Grid item xs={12}>
            <Typography className={classes.question} align="left" variant="h5">
              Why I code
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.text} align="left" variant="h6">
                I am a software engineer by way of self-teaching and Flatiron software engineering boot camp. I have a background as an IT support specialist, where I developed home and business energy monitoring solutions using communication systems developed by the U.S Department of Energy. Before my experience in technology, I was a full-time professional poker player. My background delivers a unique perspective as a problem solver and a strong determination for optimizing decision space. My dedication to mastering software engineering is demonstrated by the applications I’ve built, actively pushing code to GitHub, weekly blogging,  and pursuing education daily. Furthermore, I am a team player who is happy to put my self-interests aside for a team’s greater good. I believe good collaboration happens when respect is standard, and ideas go challenged. I have deliberately chosen this career path because I want to spend a lifetime developing and growing as both an engineer and a person. 
            </Typography>
          </Grid>
        </Grid>
        <Grid container item>
          <Grid item xs={12}>
            <Typography className={classes.question} align="left" variant="h5">
              Some of my favorite things
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.text} align="left" variant="h6">
              - My Dogs, animals in general
            </Typography>
            <Typography className={classes.text} align="left" variant="h6">
              - UFC, I love the combination of skills that make up great fighters!
            </Typography>
            <Typography className={classes.text} align="left" variant="h6">
              - Video Games
            </Typography>
            <Typography className={classes.text} align="left" variant="h6">
              - Disc Golf
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default About;