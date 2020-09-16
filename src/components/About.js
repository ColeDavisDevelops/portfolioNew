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
    color: 'rgb(170, 170, 170)',
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
              I find my health to be dependent on being laser-focused on progressing towards a goal. 
              My first real passion was trading and investing. What I loved about trading was the complexity that came with markets and finding profitable strategies. In 2017 I transitioned to playing poker professionally because of its many parallels to trading. Poker and trading ultimately left me wanting more due to their zero-sum nature and my willingness to create value. For these reasons, in 2019, I decided to pursue a career in technology. I soon found a foot in the industry as an information technology support specialist. After six months, I developed more direction and decided to specialize in software engineering.
              What I love about software engineering is the number of things there are to learn and create. Exercising my coding knowledge and seeing my growth as a programmer is fulfilling and exciting work. Furthermore, programming being industry-agnostic allows my skills to possess a dynamic value proposition.
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
              - My Dogs, animals in general
            </Typography>
            <Typography className={classes.text} align="left" variant="h6">
              - UFC, I love the combination of skills that make up great fighters!
            </Typography>
            <Typography className={classes.text} align="left" variant="h6">
              - Video Games
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