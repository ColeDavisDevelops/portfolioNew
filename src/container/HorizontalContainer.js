import React from 'react';
import FlipCard from '../components/FlipCard';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '100%'

  },
  button: {
    height: '100%',
    width: '100%',
    backgroundColor: 'gray'
  }
}));



const HorizontalContainer = (props) => {
  const classes = useStyles();

  return (
    
      <Grid container className={classes.container}>
        <Grid item xs={1}>
          <Button className={classes.button}>{"<"}</Button>
        </Grid>
        <Grid item xs={10}>
          <FlipCard />
        </Grid>
        <Grid item xs={1}>
          <Button className={classes.button}>{">"}</Button>
        </Grid>
      </Grid>

  )
}

export default HorizontalContainer;