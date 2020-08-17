import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({

}));

const ProjectCardSecondary = () => {

  const classes = useStyles();
  return (
    <Grid item container xs={12}>
      <Grid item xs={12}>
        <Typography variant="h4" align="left">
          Playlister 
        </Typography>
      </Grid>
      <Grid item xs={12} xl={6}>
        <img src={'https://im2.ezgif.com/tmp/ezgif-2-7ce5c67ef82d.gif'} />
      </Grid>
      <Grid item xs={12} xl={6}>
        <Typography variant="h6" align="left">
          I am a problem solver who codes 
          I am a problem solver who codes 
          I am a problem solver who codes 
          I am a problem solver who codes 
          I am a problem solver who codes 
          I am a problem solver who codes 
          I am a problem solver who codes 
          I am a problem solver who codes 
        </Typography>
      </Grid>
    </Grid>
  )
}

export default ProjectCardSecondary;