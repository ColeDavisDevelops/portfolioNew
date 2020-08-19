import React from 'react';
// MATERIAL-UI
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  footer: {
    width: '100%',
    margin: 'auto',
    marginTop: 10,
    marginBottom: 20
  },
  icon: {
    width: '100%',
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h3" align="center">
          Contact
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" component="p" >
          colebuildanddevelop@gmail.com
        </Typography>
        <Link href="https://github.com/Colebuildanddevelop">
          <Typography variant="h6" align="center" color="textSecondary" component="p" >            
            https://github.com/Colebuildanddevelop
          </Typography>
        </Link>
      </footer>
      {/* End footer */}
    </React.Fragment>
  )
}

export default Footer;