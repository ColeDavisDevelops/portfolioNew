import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  title: {
    width: '100%',
    fontWeight: 'bold',
    textDecoration: 'underline'
  },
  question: {
    fontWeight: 'bold'
  },
  container: {
    [theme.breakpoints.down('md')]: {
      padding: 20
      
    }

  },
  text: {
    [theme.breakpoints.down('lg')]: {
      fontSize: 15 
    }
  }
}));

const About = () => {
  const classes = useStyles();
  
  return (
    <>
      <Typography className={classes.title} align="center" variant="h3">
        About
      </Typography>
      <Grid className={classes.container} item container spacing={2}>
        <Grid container item>
          <Grid item xs={12}>
            <Typography className={classes.question} align="left" variant="h5">
              Why I code
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.text} align="left" variant="h6">
              For my personal well being I find it essential to be laser focused on improving or striving for something. 
              For a long time I wanted to be a professional investor and trader. What I loved most about trading 
              was the complexity that came with markets and finding profitable strategies. In 2017 I transitioned to
              playing poker professionally where I eventually stopped in 2019. Poker and trading ultimately came up short due 
              to their zero sum nature. With hopes of creating value I 
              decided to pursue a career in technology. I soon found a foot in the industry as an information technology 
              support specialist in early 2019. After six or so months I found more direction and since then my time has been spent focused solely on software engineering.
              What I love most about software engineering is the amount of things there are to learn and build. Exercising my coding knowledge and growing as 
              a programmer is truly fulfilling work and there will never be a point where I will run out of things to learn or do. For this reason 
              I find programming to be the best way to spend the rest of my life.     
            </Typography>
          </Grid>
        </Grid>
        <Grid container item>
          <Grid item xs={12}>
            <Typography className={classes.question} align="left" variant="h5">
              Some of my favorite things
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.text} align="left" variant="h6">
              - My Dogs, I have two! 
            </Typography>
            <Typography className={classes.text} align="left" variant="h6">
              - UFC, I love the combination of skills that make up great fighters!
            </Typography>
            <Typography className={classes.text} align="left" variant="h6">
              - Video Games, ofc
            </Typography>
            <Typography className={classes.text} align="left" variant="h6">
              - Disc Golf
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default About;