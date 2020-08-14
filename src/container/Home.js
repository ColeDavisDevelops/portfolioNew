import React from 'react';
import Projects from './Projects';
import MouseChaser from '../components/MouseChaser';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  horizontalContainer: {
    
  },
  title: {
    position: 'absolute',
    width: '100%',
    top: '40%'
  },
  projects: {
    margin: 'auto'
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} className={classes.projects}>
        <MouseChaser />
      </Grid>
    </Grid>
  )
}

export default Home;