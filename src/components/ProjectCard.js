import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const ProjectCard = (props) => {

  const useStyles = makeStyles((theme) => ({
    card: {
      backgroundColor: props.backgroundColor,
      padding: 20,
      border: '10px solid black',
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
    image: {
      width: '100%'
    }
  }));

  const [flipped, set] = useState(false)
  const classes = useStyles();
  console.log(props)

  return (
    <div className={classes.card} >
      <Typography className={classes.title} variant="h4">
        {props.title}
      </Typography>
      <img className={classes.image} src={props.image}/>
    </div>
  )
}

export default ProjectCard;

