import React from 'react'
import { useTrail, animated } from 'react-spring'

import { makeStyles } from '@material-ui/core/styles';

// icons 
import jsIcon from '../static/js.svg';
import reactIcon from '../static/react.svg';
import reduxIcon from '../static/redux.svg';
import railsIcon from '../static/rails.svg';
import pythonIcon from '../static/python.svg';
import nodeIcon from '../static/node.svg';
import mongoIcon from '../static/mongoDb.svg';
import postgresqlIcon from '../static/postgresql.svg';
import githubIcon from '../static/github.svg';
import skillsIcon from '../static/skills.svg';


const fast = { tension: 1200, friction: 40 }
const slow = { mass: 10, tension: 200, friction: 50 }
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

// js
// react
// redux
// rails
// python
// node
// mongo
//postgres
// github


const icons = [
  jsIcon,
  reactIcon,
  reduxIcon,
  railsIcon,
  pythonIcon,
  nodeIcon,
  mongoIcon,
  postgresqlIcon,
  githubIcon,
  skillsIcon
]

const useStyles = makeStyles((theme) => ({
  icon: {
    
    position: 'absolute',
    willChange: 'transform',
    boxShadow: '10px 10px 5px 0px rgba(0, 0, 0, 0.75)',
    border: '5px solid black',
    backgroundColor: 'black',
    width: 200,
    height: 200,
  }
}));

const MouseChaser = () => {
  const [trail, set] = useTrail(10, () => ({ xy: [0, 0], config: i => (i === 0 ? fast : slow) }))
  console.log(trail)

  const classes = useStyles();
  return (
    <>
      <div className="hooks-main" onMouseMove={e => set({ xy: [e.clientX, e.clientY] })}>
        {trail.map((props, index) => (
          <animated.div 
            className={classes.icon} 
            key={index} 
            style={{ background: `url(${icons[index]}) no-repeat center`, backgroundColor: 'black', transform: props.xy.interpolate(trans) }} 
          />
        ))}
      </div>
    </>
  )
}

export default MouseChaser;