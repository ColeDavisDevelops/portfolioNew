import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import reactIcon from '../static/react.svg';


const ProjectCard = (props) => {

  const useStyles = makeStyles((theme) => ({
    card: {
      backgroundColor: props.backgroundColor,
      padding: 20,
      border: '5px solid black',
      borderRadius: 10,
      cursor: 'pointer',
      willChange: 'transform, opacity',
      backgroundSize: 'cover'
    },
    title: { 
      paddingBottom: 10,    
      color: props.color ? props.color : 'black',
      fontWeight: 'bold'
    },
    projectGif: {
      width: '100%'
    },
    image: {
      width: 65,
      height: 65,
      margin: 10
    },
    description: {
      paddingBottom: 20
    },
    button: {
      backgroundColor: 'black',
      color: 'white',
      marginBottom: 10
    }
  }));

  const [showInfo, setShowInfo] = useState(false)
  const classes = useStyles();
  console.log(showInfo)
  return (
    <div 
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
      onClick={() => setShowInfo(!showInfo)}
    >
      {!showInfo ? ( 
        <div className={classes.card} >
          <Typography className={classes.title} variant="h4">
            {props.title}
          </Typography>
          <img className={classes.projectGif} src={props.image}/>
        </div>
      ) : (
        <div className={classes.card} style={{backgroundColor: 'white'}}>
          <Grid containter>
            <Grid xs={12}>
              <Typography className={classes.title} align="center" style={{color: 'black'}} variant="h4">
                {props.title}
              </Typography>
            </Grid>
            <Grid xs={12}>
              <div style={{width: '100%', margin: 'auto'}} >
                {props.stack.map(svg => <img className={classes.image} src={svg} />)}
              </div>
            </Grid>
            <Divider variant="fullWidth" style={{background: 'black', marginTop: 10, marginBottom: 10}} />
            <Grid xs={12}>
              <Typography style={{color: 'black'}} variant="h4">
                Situation
              </Typography>
              <Typography className={classes.description} style={{color: 'black'}} variant="h6">
                {props.description}
              </Typography>
            </Grid>
            <Grid xs={12}>
              <Typography style={{color: 'black'}} variant="h4">
                Action
              </Typography>
              <Typography className={classes.description} style={{color: 'black'}} variant="h6">
                {props.description}
              </Typography>
            </Grid>
            <Grid xs={12}>
              <Typography style={{color: 'black'}} variant="h4">
                Result
              </Typography>
              <Typography className={classes.description} style={{color: 'black'}} variant="h6">
                {props.description}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button className={classes.button} fullWidth variant="contained">
                Website
              </Button>
              <Button className={classes.button} fullWidth variant="outlined">
                Repository
              </Button>
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  )
}

export default ProjectCard;

