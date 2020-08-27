import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

const useStyles = makeStyles(theme => ({
  container: {
    [theme.breakpoints.down('lg')]: {
      padding: 10,
      width: '100%',
    },
    [theme.breakpoints.up('lg')]: {
      marginBottom: 20,
    }
  },
  title: {
    fontWeight: 'bold',
  },
  imageContainer: {
  }, 
  image: {
    [theme.breakpoints.down('lg')]: {
      minWidth: '100%',
    },
    width: '90%',
    
  },
  stackBox: {
    [theme.breakpoints.up('xl')]: {
      marginBottom: 20
    },
    [theme.breakpoints.between('md', 'lg')]: {
      padding: 10,
    },
    [theme.breakpoints.down('sm')]: {
      padding: 10,
      width: '90%'
    },
    maxHeight: '120px',
    width: '60%',
    margin: 'auto'
  },
  icon: {
    [theme.breakpoints.down('sm')]: {
      width: 60 
    },
    width: '15%',
    margin: 'auto'
  },
  description: {
    [theme.breakpoints.down('lg')]: {
      fontSize: 15, 
      textAlign: 'justify'
    }
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
    [theme.breakpoints.down('lg')]: {
      width: '100%',
    },
    [theme.breakpoints.up('xl')]: {
      marginTop: 100,
      width: '50%',
      margin: 'auto',
    },
  },
  button: {
    [theme.breakpoints.down('lg')]: {
      width: '100%',
      marginLeft: 0,
      marginRight: 0
    },
    backgroundColor: 'black',
    color: 'white',
    width: '40%',
    margin: 10,
    '&:hover': {
      color: 'black'
    }
  }
}));

const ProjectCardSecondary = (props) => {

  const classes = useStyles();
  return (
    <Card style={{margin: 20}}>
      <Grid className={classes.container} item container xs={12}>
        <Grid item xs={12}>
          <Typography className={classes.title} variant="h4" align="left">
            {props.title}
          </Typography>
        </Grid>
        <Grid className={classes.imageContainer} item xs={12} xl={6}>
          <img className={classes.image} src={props.image} />
        </Grid>
        <Grid item xs={12} xl={6}>
          <Grid className={classes.stackBox} item container xs={12}>
            {props.icons.map(icon => <img className={classes.icon} src={icon} />)}
          </Grid>
          <Grid item>
            <Typography className={classes.description} variant="h6" align="left">
              {props.description}
            </Typography>
          </Grid>
          <Grid className={classes.buttonBox} item container xs={12}>
            <Button className={classes.button} target="_blank" href={props.github} variant="outlined">
              Github
            </Button>
            <Button className={classes.button} target="_blank" href={props.demo} variant="outlined">
              Demo
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  )
}

export default ProjectCardSecondary;