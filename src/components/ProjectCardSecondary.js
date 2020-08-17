import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 'bold'
  },
  image: {
    border: 'solid 2px black'
  },
  stackBox: {
    marginBottom: 20,
    width: '50%',
    margin: 'auto'
  },
  icon: {
    width: '20%',
    margin: 'auto'
  },
  divider: {
    margin: 'auto',
    width: '100%',
    padding: 1,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'lightblack'
  },

  buttonBox: {
    width: '50%',
    margin: 'auto',

    marginTop: 100,
  },
  button: {
    backgroundColor: 'black',
    color: 'white',
    width: '40%',
    margin: 10
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
        <img className={classes.image} src={props.image} />
      </Grid>
      <Grid item xs={12} xl={6}>
        <Grid className={classes.stackBox} item container xs={12}>
          {props.icons.map(icon => <img className={classes.icon} src={icon} />)}
        </Grid>
        <Grid item>
          <Typography variant="h6" align="left">
            {props.description}
          </Typography>
        </Grid>
        <Grid className={classes.buttonBox} item container xs={12}>
          <Button className={classes.button} variant="outlined">
            Github
          </Button>
          <Button className={classes.button} variant="outlined">
            Demo
          </Button>
        </Grid>
        {props.last ? (null) : <Divider className={classes.divider} variant="middle" />}
      </Grid>
    </Grid>
  )
}

export default ProjectCardSecondary;