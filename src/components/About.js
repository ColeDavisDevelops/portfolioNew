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
    [theme.breakpoints.down('sm')]: {
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
              Why I code:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.text} align="left" variant="h6">
              I have always been in search of a proffession that I found would be worth spending a liftetime on. 
              To me, this is something that would offer endless growth potential while also creating things that add value to peoples lives. 
              For a long time I wanted to be a proffessional investor and trader. I would spend every trading day 
              watching futures contract price action and studying any strategy I could. What I loved most about trading 
              was the complexity that came with markets and finding profitable strategies. From 2017 to 2019 I transitioned to
              playing poker professionally. In addition to risk management and creativity, poker and trading demand extreme levels of emotional 
              resilience and I have carried that with me trough my programming journey. Where poker and trading ultimately came up short was due 
              to the sole focus on stealing value. I felt my energy could be better spent than competing in zero sum games. In early 2019 I 
              decided to pursue a career in technology with hopes to actually create value. I soon found a foot in the industry as a information technology 
              support specialist. Now my time is spent focusing solely on software engineering. Software engineering and operation science 
              offer infinite possibilities, growth and learning well worthy of spening a lifetime on. 
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