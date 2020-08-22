import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GitHubIcon from '@material-ui/icons/GitHub';
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
    [theme.breakpoints.up('xl')]: {
      fontSize: 50 
    },
    fontSize: 20,
    flexGrow: 1,
    fontWeight: 'bolder',
    padding: 10

  },
  listItem: {
    border: '1px solid black'
  },
  menuIcon: {
    color: 'black',
    [theme.breakpoints.up('xl')]: {
      width: 50,
      height: 50 
    },
    width: 20,
    height: 20 
  },
  listItemText: {
    '.MuiListItemText-primary': {
      fontSize: 100
    }
  }, 
  icon: {
    color: 'black',
    padding: 10,
    height: 45,
    width: 45,
  },
  LinkedInIcon: {
    padding: 5,
    color: 'black',
    height: 55,
    width: 55,
  },
  smiley: {
    position: 'absolute',
    left: '19%',
    fontSize: 50
  }
}));

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title}>
            {'<Cole Davis />'}
          </Typography>
          <IconButton edge="start">
            <MenuIcon className={classes.menuIcon} onClick={() => setDrawerOpen(!drawerOpen)}/>
          </IconButton>
          <SwipeableDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} anchor='top'>
            <List style={{padding: 0}}>
              <ListItem className={classes.listItem} button key={"Github"}>
                <ListItemIcon><GitHubIcon className={classes.icon} /></ListItemIcon>
                <ListItemText className={classes.listItemText} primary={"Github"} />
              </ListItem>
              <ListItem className={classes.listItem} button key={"LinkedIn"}>
                <ListItemIcon><LinkedInIcon className={classes.LinkedInIcon} /></ListItemIcon>
                <ListItemText className={classes.listItemText} primary={"LinkedIn"} />
              </ListItem>
              <ListItem className={classes.listItem} button key={"Medium"}>
                <ListItemIcon><img className={classes.icon} alt="medium icon" src={mediumIcon} /></ListItemIcon>
                <ListItemText className={classes.listItemText} primary={"Medium"} />
              </ListItem>
            </List>
          </SwipeableDrawer>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;