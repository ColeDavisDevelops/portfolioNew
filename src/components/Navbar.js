import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
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
import DescriptionIcon from '@material-ui/icons/Description';
import mediumIcon from '../static/medium.svg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navbar: {
    backgroundColor: 'black',
    color: 'white',
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
    borderBottom: '1px solid black'
  },
  menuIcon: {
    color: 'white',
    [theme.breakpoints.up('xl')]: {
      width: 50,
      height: 50 
    },
    width: 20,
    height: 20 
  },
  listItemText: {
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold'
  }, 
  icon: {
    color: 'white',
    padding: 10,
    height: 65,
    width: 65,
  },
  LinkedInIcon: {
    padding: 5,
    color: 'white',
    height: 55,
    width: 55,
  },
  mediumIcon: {
    color: 'white',
    height: 80,
    width: 80,
  },
}));

const withMediaQuery = (...args) => Component => props => {
  const mediaQuery = useMediaQuery(...args);
  return <Component mediaQuery={mediaQuery} {...props} />
}

const HideOnScroll = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const classes = useStyles();
  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar className={classes.navbar}>
          <Toolbar>
            <Typography className={classes.title}>
              {'<Cole Davis />'}
            </Typography>
            {props.mediaQuery ? (
              <>
                <IconButton href="https://docs.google.com/document/d/e/2PACX-1vRSJk-NgIjoBdFVykocdBlveWbxkQXhaKooxzKdoRt2mgg-A6FHMzHCQFn0AuaErXZcDFLHMfMW__8M/pub" target="_blank">
                  <DescriptionIcon className={classes.icon} />
                </IconButton> 
                <IconButton href="https://github.com/Colebuildanddevelop" target="_blank">
                  <GitHubIcon className={classes.icon} />
                </IconButton> 
                <IconButton href="https://www.linkedin.com/in/cole-davis-8b13701a0/" target="_blank">
                  <LinkedInIcon style={{ height: 70, width: 70 }} className={classes.LinkedInIcon} />
                </IconButton> 
                <IconButton href="https://medium.com/@colebuildanddevelop" target="_blank">
                  <img className={classes.mediumIcon} alt="medium icon" src={'https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Medium-512.png'} />
                </IconButton> 
              </>
            ) : (
              <>
                <IconButton edge="start">
                  <MenuIcon className={classes.menuIcon} onClick={() => setDrawerOpen(!drawerOpen)}/>
                </IconButton>
                <SwipeableDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} anchor='right'>
                  <List style={{padding: 0}}>
                    <ListItem className={classes.listItem} component="a" target='_blank' href='https://docs.google.com/document/d/105yHjYIRqL0oiIUllId69qzcJR70Dy6sUMgpJS1JPJE/edit?usp=sharing' button key={"Github"}>
                      <ListItemIcon><DescriptionIcon className={classes.icon} /></ListItemIcon>
                      <ListItemText classes={{primary: classes.listItemText}}  primary={"Resume"} />
                    </ListItem>
                    <ListItem className={classes.listItem} component="a" target='_blank' href='https://github.com/Colebuildanddevelop' button key={"Github"}>
                      <ListItemIcon><GitHubIcon className={classes.icon} /></ListItemIcon>
                      <ListItemText classes={{primary: classes.listItemText}}  primary={"Github"} />
                    </ListItem>
                    <ListItem  className={classes.listItem} component="a" target='_blank' href='https://www.linkedin.com/in/cole-davis-8b13701a0/' button key={"LinkedIn"}>
                      <ListItemIcon><LinkedInIcon style={{ height: 70, width: 70 }} className={classes.LinkedInIcon} /></ListItemIcon>
                      <ListItemText classes={{primary: classes.listItemText}} primary={"LinkedIn"} />
                    </ListItem>
                    <ListItem className={classes.listItem} component="a" target='_blank' href='https://medium.com/@colebuildanddevelop' button key={"Medium"}>
                      <ListItemIcon><img className={classes.mediumIcon} alt="medium icon" src={'https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Medium-512.png'} /></ListItemIcon>
                      <ListItemText classes={{primary: classes.listItemText}} primary={"Medium"} />
                    </ListItem>
                  </List>
                </SwipeableDrawer>
              </>
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
}

export default withMediaQuery('(min-width:1000px)')(Navbar);