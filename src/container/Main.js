import React from 'react';
import Projects from './Projects';
import Avatar from '../components/Avatar';
import NavBar from '../components/Navbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Main = () => {
  return (
    <Grid container>
      <NavBar/>
      <Grid style={{marginTop: 50, marginBottom: 10}} item xs={12}>
        <Avatar />
      </Grid>
      <Grid style={{marginTop: 10, marginBottom: 10}} item xs={12}>
        <Typography style={{fontWeight: 'bold'}} variant="h3" align="center">
          Software Engineer
        </Typography>
        <Typography variant="h6" align="center">
          I dont know what the fck to put here.... hire me?  
        </Typography>
      </Grid>
      <Projects/>
    </Grid>

  )

}

export default Main;