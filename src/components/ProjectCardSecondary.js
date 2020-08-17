import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 'bold'
  }

}));

const ProjectCardSecondary = (props) => {

  const classes = useStyles();
  return (
    <Grid style={{marginBottom: 20}} item container xs={12}>
      <Grid item xs={12}>
        <Typography className={classes.title} variant="h4" align="left">
          {props.title}
        </Typography>
      </Grid>
      <Grid item xs={12} xl={6}>
        <img src={props.image} />
      </Grid>
      <Grid item xs={12} xl={6}>
        <Typography variant="h6" align="left">
          {props.description}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default ProjectCardSecondary;