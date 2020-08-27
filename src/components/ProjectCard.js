import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Divider from '@material-ui/core/Divider';
import Grow from '@material-ui/core/Grow';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';


const ProjectCard = (props) => {
  const useStyles = makeStyles((theme) => ({
    imageContainer: {
      backgroundColor: props.backgroundColor,
      padding: 10,
      borderRadius: 20 
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '1%'
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
        backgroundColor: 'white',
        color: 'black'
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
          <Grid className={classes.imageContainer} item xs={12}>
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
              {props.problem}
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
              Website 
            </Button>
          </Grid>
        </Grid>
      </Grow>
    </>
  )
}

export default ProjectCard;

