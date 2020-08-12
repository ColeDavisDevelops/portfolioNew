import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useSpring, animated as a } from 'react-spring'
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    width: '100%',
    height: '100vh',
 
  },
  card: {
    zIndex: 2,
    position: 'absolute',
    minHeight: 870,
    width: 370,
    border: '10px solid black',
    borderRadius: 5,
    padding: 20,
    cursor: 'pointer',
  },
  front: {
    backgroundColor: 'rgb(94, 224, 125)',
    backgroundSize: 'cover'
  },
  projectTitle: {
    paddingBottom: 10,
    color: 'black',
    fontWeight: 'bold'
  },
  image: {
    margin: 'auto'
  },
  button: {
    backgroundColor: 'black',
    marginBottom: 10,
    color: 'white',
    width: '100%',
  }
}));

const FlipCard = () => {
  const [flipped, setFlipped] = useState(false);
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 } 
  }));

  const { opacity } = useSpring({
    opacity: flipped ? 1 : 0,
  });
  
  const classes = useStyles();
  return (
    <div className={classes.cardContainer} >
      <a.div 
        onClick={() => setFlipped(state => !state)}
        className={`${classes.card} ${classes.front}`}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ opacity: opacity.interpolate(o => 1 - o), transform: props.xys.interpolate(trans) }} 
      >
        <Typography className={classes.projectTitle} variant="h3">
          PredictBr
        </Typography>
        <img 
          className={classes.image}
          src="https://raw.githubusercontent.com/Colebuildanddevelop/Portfolio/master/src/predictChoseGame.gif"
        />
      </a.div>
      <a.div 
        onClick={() => setFlipped(state => !state)}
        className={classes.card}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ opacity: opacity, transform: props.xys.interpolate(trans) }} 
      >
        <Typography className={classes.projectTitle} variant="h3">
          PredictBr
        </Typography>
        <Button 
          className={classes.button}
          onClick={() => setFlipped(state => !state)}
          variant="contained"
        >
          Website
        </Button>
        <Button 
          className={classes.button}
          onClick={() => setFlipped(state => !state)}
          variant="contained"
        >
          Github
        </Button>
      </a.div>
    </div>
  )
}

export default FlipCard;