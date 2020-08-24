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
      [theme.breakpoints.up('md')] : {
        maxHeight: 950,
        minWidth: 420,
        maxWidth: 420,
        minHeight: 950,
        padding: 20,
      },
      padding: 10,
      margin: 'auto',
      backgroundColor: props.backgroundColor,
      border: '5px solid black',
      borderRadius: 10,
      cursor: 'pointer',
      backgroundSize: 'cover'
    },
    infoButton: {
      marginTop: 10,
      fontSize: 20,
      backgroundColor: props.backgroundColor,
      fontWeight: 'bolder',
      color: props.color ? props.color : 'black',
    },
    title: { 
      paddingBottom: 10,    
      color: props.color ? props.color : 'black',
      fontWeight: 'bold'
    },
    projectGif: {
      width: '100%',
      maxHeight: '90%'
    },
    image: {
      width: '100%',
      maxHeight: 90,
      margin: 'auto',
    },
    description: {
      paddingBottom: 20
    },
    button: {
      backgroundColor: 'black',
      color: 'white',
      marginBottom: 10,
      '&:hover': {
        color: 'black'
      }
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
          <Button className={classes.infoButton} onClick={() => setShowInfo(true)} fullWidth>
            click for more
          </Button>
        </div>
      ) : (
        <Grid style={{backgroundColor: 'white', display: 'flex'}} className={classes.card} container direction="column">
          <Grid item xs={12}>
            <Typography className={classes.title} align="center" style={{color: 'black'}} variant="h4">
              {props.title}
            </Typography>
          </Grid>
          <Grid item container xs={12}>
            {props.stack.map((svg, idx) => <Grid style={{display: 'block'}} item xs={3} key={idx}><img className={classes.image} alt={props.title} src={svg} /></Grid>)}
          </Grid>
          <Divider variant="fullWidth" style={{background: 'black', marginTop: 10, marginBottom: 10}} />
          <Grid item xs={12}>
            <Typography style={{color: 'black'}} variant="h4">
              Problem
            </Typography>
            <Typography className={classes.description} style={{color: 'black'}} variant="body1">
              {props.problem}
            </Typography>
          </Grid>
          <Grid style={{flexGrow: 1}} item xs={12}>
            <Typography style={{color: 'black'}} variant="h4">
              Solution
            </Typography>
            <Typography className={classes.description} style={{color: 'black'}} variant="body1">
              {props.solution}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button className={classes.button} target="_blank" href={props.website} fullWidth variant="outlined">
              Website
            </Button>
            <Button className={classes.button} target="_blank" href={props.github} fullWidth variant="outlined">
              Github Repository
            </Button>
          </Grid>
        </Grid>
      )}
    </div>
  )
}

export default ProjectCard;

