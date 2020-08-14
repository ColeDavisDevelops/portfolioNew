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
  },
  title: {
    position: 'absolute',
    borderRadius: 10,
    backgroundColor: 'lightgreen',
    border: '5px solid black',
    textAlign: 'center',
    top: '20%',
    left: '20%',
    fontSize: 100,
    fontWeight: 'bold',
    width: '60%',
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
    '&:hover': {
      backgroundColor: '#dbd7f7',
    },
    border: '5px solid black',
    height: '100%',
    fontWeight: 'bold',
    fontSize: 20
  },
  projects: {
    margin: 'auto'
  }
}));

const Home = (props) => {
  const [toggle, set] = useState(false);
  const transitions = useTransition(toggle, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const classes = useStyles();
  return (
    <Grid id="home" className={classes.container} container>
      <Grid className={classes.title} item xs={12}>
        <Wave text="Hi, I'm Cole!" effect="stretch" effectChange={1.5} />
      </Grid>
      <Grid className={classes.buttonContainer} item xs={12}>
        <Button onClick={() => props.history.push('/projects')} className={classes.button} fullWidth variant="outlined">
          Enter
        </Button>
      </Grid>
      <Grid item xs={12} className={classes.projects}>
        <MouseChaser />
      </Grid>
    </Grid>
  )
}

export default Home;

