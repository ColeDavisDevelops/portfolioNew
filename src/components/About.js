import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  title: {
    width: '100%',
    fontWeight: 'bold'
  },
  question: {
    fontWeight: 'bold'
  }

}));

const About = () => {
  const classes = useStyles();
  
  return (
    <>
      <Typography className={classes.title} align="center" variant="h3">
        About
      </Typography>
      <Grid item container spacing={2}>
        <Grid container item>
          <Grid item xs={12}>
            <Typography className={classes.question} align="left" variant="h5">
              Why I code:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography align="left" variant="h6">
              lorem lorem lorem lorem
              lorem lorem lorem lorem
              lorem lorem lorem lorem
              lorem lorem lorem lorem
              lorem lorem lorem lorem
              lorem lorem lorem lorem
              lorem lorem lorem lorem
            </Typography>
          </Grid>
        </Grid>
        <Grid container item>
          <Grid item xs={12}>
            <Typography className={classes.question} align="left" variant="h5">
              Why I code:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography align="left" variant="h6">
              I find that coding is the perfect mix of 
            </Typography>
          </Grid>
        </Grid>
        <Grid container item>
          <Grid item xs={12}>
            <Typography className={classes.question} align="left" variant="h5">
              Why I code:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography align="left" variant="h6">
              I find that coding is the perfect mix of 
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  )

}

export default About;