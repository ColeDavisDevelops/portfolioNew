import React from 'react';
// MATERIAL-UI
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

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
        <Typography variant="h6" align="left">
          colebuildanddevelop@gmail.com
        </Typography>
        <Link href="https://github.com/Colebuildanddevelop">
          <Typography variant="h6" align="left">            
            https://github.com/Colebuildanddevelop
          </Typography>
        </Link>
      </footer>
      {/* End footer */}
    </div>
  )
}

export default Footer;