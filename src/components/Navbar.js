import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useTransition, animated} from 'react-spring'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';
import mediumIcon from '../static/mediumIcon.svg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
    fontSize: 60,
    padding: 20
  },
  icon: {
    height: 45,
    width: 45,
    marginLeft: 20
  },
  LinkedInIcon: {
    height: 55,
    width: 55,
    marginLeft: 20 
  },
  smiley: {
    position: 'absolute',
    left: '19%',
    fontSize: 50
  }
}));

const Navbar = () => {
  const [toggle, set] = useState(true)
  const transitions = useTransition(toggle, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  
  useEffect(() => {
    console.log("update")
    const interval = setInterval(() => set(!toggle), 5000);
    return () => clearInterval(interval);
  })

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            {'Cole Davis'}
          </Typography>
          {transitions.map(({ item, key, props }) => 
          item
            ? <animated.div className={classes.smiley} style={{from: props.from, enter: props.enter, leave: props.leave}}>😄</animated.div>
            : <animated.div className={classes.smiley} style={{from: props.from, enter: props.enter, leave: props.leave}}>🤪</animated.div>
          )}
          <GitHubIcon className={classes.icon} />
          <LinkedInIcon className={classes.LinkedInIcon} />
          <img className={classes.icon} alt="medium icon" src={mediumIcon} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;