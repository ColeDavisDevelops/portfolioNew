import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';
import mediumIcon from '../mediumIcon.svg';
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
    fontWeight: 'bold'
  },
  icon: {
    height: 35,
    width: 35,
    marginLeft: 20
  },
  LinkedInIcon: {
    height: 45,
    width: 45,
    marginLeft: 20 
  }
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            {'<Cole Davis />'}
          </Typography>
          <GitHubIcon className={classes.icon} />
          <LinkedInIcon className={classes.LinkedInIcon} />
          <img className={classes.icon} alt="medium icon" src={mediumIcon} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;