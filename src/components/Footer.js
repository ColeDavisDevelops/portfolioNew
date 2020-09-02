import React from 'react';
// MATERIAL-UI
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  footer: {
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 100
    },
    [theme.breakpoints.down('md')]: {
      paddingLeft: 10 
    },

    position: 'relative',
    top: '30%',
    width: '100%',
  },
  title: {
    fontWeight: 'bolder'
  },
  email: {
    color: 'white',
    height: 40,
    width: 40
  },
  icon: {
    width: '100%',
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      {/* Footer */}
      <footer >
        <Typography className={classes.title} variant="h1" align="left">
          Let's build!
        </Typography>
        <Typography variant="h4" align="left">
          <Button 
            startIcon={<MailIcon className={classes.email}/>} 
            style={{color: 'white', fontSize: 15}} 
          >
            ColeBuildandDevelop@gmail.com
          </Button>
        </Typography>
      </footer>
      {/* End footer */}
    </div>
  )
}

export default Footer;