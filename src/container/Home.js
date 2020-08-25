import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import Projects from './Projects';
import MouseChaser from '../components/MouseChaser';
import { Wave } from 'react-animated-text';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    backgroundColor: 'black'
  },
  title: {
    display: 'relative',
    padding: 20,
    position: 'absolute',
    borderRadius: 10,
    border: '1px solid black',
    textAlign: 'center',
    top: '40%',
    [theme.breakpoints.down('md')]: {
      left: '10%',
      width: '80%',
    },
    [theme.breakpoints.up('md')]: {
      left: '30%',
      width: '40%',
    },
    maxHeight: 120,
    minHeight: 120  
  },
  buttonContainer: {
    zIndex: 2,
    backgroundColor: 'white',
    position: 'absolute',
    height: '10%',
    width: '40%',
    top: '40%',
    left: '30%'
  },
  button: {
    border: 'none',
    '&:hover': {
      backgroundColor: '#dbd7f7',
    },
    fontWeight: 'bold',
    fontSize: 20, 
  },
  projects: {
    margin: 'auto'
  }
}));

const Home = (props) => {
  const classes = useStyles();
  return (
    <Grid className={classes.container} container>
      <div id="home" class={classes.title}>
        <Typography style={{fontWeight: 'bold'}} variant="h6" align="center">
          Hi, I am Cole.
        </Typography>
        <Button onClick={() => props.history.push('/main')} className={classes.button} fullWidth variant="outlined">
          Enter
        </Button>
      </div>
      <Grid item xs={12} className={classes.projects}>
        <MouseChaser />
      </Grid>
    </Grid>
  )
}

export default Home;

