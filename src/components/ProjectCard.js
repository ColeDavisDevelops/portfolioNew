import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Grow from '@material-ui/core/Grow';

const ProjectCard = (props) => {
  const useStyles = makeStyles((theme) => ({
    image: {
      border: `2px solid ${props.backgroundColor}`,
      maxWidth: '100%',
      height: 'auto',
      borderRadius: 20 
    },
    title: { 
      fontWeight: 'bolder',
      paddingTop: 10
    },
    description: {
      color: 'rgb(170, 170, 170)'
    },
    icon: {
      float: 'left',
      maxWidth: 60,
      maxHeight: 60,
      paddingRight: 10,
      paddingTop: 20,
    },
    button: {
      padding: 0,
      paddingTop: 10,
      paddingRight: 10,
      backgroundColor: 'black',
      color: 'white',
      marginBottom: 10,
      '&:hover': {
        backgroundColor: 'black',
        color: 'white'
      }
    }
  }));

  const [checked, setChecked] = useState(false);

  setTimeout(() => {
    setChecked(true);
  }, props.timeout);

  const classes = useStyles();

  return (
    <>
      <Grow in={checked}>
        <Grid container style={{paddingTop: 20}}>
          <Grid item xs={12}>
            <img className={classes.image} src={props.image}/>
          </Grid>
          <Grid item xs={12}>
            {props.stack.map(icon => <img className={classes.icon} src={icon} />)}
          </Grid>
          <Grid className={classes.title} item>
            <Typography variant="h3" align="left">
              {props.title}
            </Typography>
          </Grid>
          <Grid className={classes.description} item>
            <Typography variant="p" align="left">
              {props.description}
            </Typography>
          </Grid>
          <Grid item>
            <Button 
              className={classes.button} 
              endIcon={<ArrowRightAltIcon/>} 
              variant="outlined"
              target="_blank"
              href={props.github}
            >
              Github 
            </Button>
            <Button 
              className={classes.button} 
              endIcon={<ArrowRightAltIcon/>} 
              variant="outlined"
              target="_blank"
              href={props.website}
            >
              {props.buttonText}
            </Button>
          </Grid>
        </Grid>
      </Grow>
    </>
  )
}

export default ProjectCard;

