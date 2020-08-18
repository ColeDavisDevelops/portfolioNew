import React from 'react';
import ProjectCard from '../components/ProjectCard';
import Grid from '@material-ui/core/Grid';
import stonkGif from '../static/stonk.gif';

import reactIcon from '../static/react.svg';
import reduxIcon from '../static/redux.svg';
import nodeIcon from '../static/node.svg';
import mongoIcon from '../static/mongoDb.svg';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  workContainer: {
    [theme.breakpoints.up('xl')]: {
      paddingLeft: 100, 
      paddingRight: 100
    },
    maxWidth: '100%', 
    margin: 'auto'
  }
}));

const Projects = () => {
  const classes = useStyles();
  return (
    <>
      <Grid style={{padding: 10}} item xs={12} md={6} xl={3}>
        <ProjectCard
          title={'StonkKings'} 
          backgroundColor={'#d84315'}
          image={stonkGif}
          stack={[reactIcon, reduxIcon, nodeIcon, mongoIcon]}
          problem={
            `New stock traders are faced with high barriers to entry. Due to SEC requirements, one needs atleast $25,000 to start 
            day trading. Furthermore new traders are forced to compete versus an unknown player pool consisting of
            the worlds best traders and strategies.`
          }
          solution={
            `Users create tournaments varying in entry fees, entry limits, and durations. Upon entering a tournament, users are granted a simulated trading account where 
            they are free to make simulated trades. When the tournament concludes, the user with the highest simulated balance is granted all the entry fees accumulated from that tournament.
            This allows new traders to compete against a known player pool for an arbitrarily small sum of money. 
          `
          }
        />
      </Grid>
      <Grid style={{padding: 10}} item xs={12} md={6} xl={3}>
        <ProjectCard
          title={'FriendsWithVidz'} 
          backgroundColor={'#673ab7'}
          color={'white'}
          image={'https://raw.githubusercontent.com/Colebuildanddevelop/Portfolio/master/src/fwv.gif'}
          stack={[reactIcon, reduxIcon, 'https://png2.cleanpng.com/sh/9e4541df87ed738598d43310ee84947e/L0KzQYm3VME4N6dxiZH0aYP2gLBuTfZqepZneeVuLXPvf8brTf1me6Rmf9t3Zz3mf773lgRmel5ue9H3cz3qf7FujPUua510RdlydHj4cn68gfQ2bGRofaZvY0S5QHA7V8MxO2Q5TKMAMkO8RoOBU8A0Omc8RuJ3Zx==/kisspng-firebase-cloud-messaging-computer-icons-google-clo-github-5ad5d3ce4fc460.4730334415239628303267.png', 'https://material-ui.com/static/logo.png']}
          problem={
            `Watching YouTube with friends can be a tedious task when you have to ensure that the video you're watching is synced up with everyone elses. 
            No one wants to be spoiled by their friends video playing five seconds ahead of their own! Also watching YouTube can be a lonely adventure with no live 
            viewing audience to share the experience with. 
            `
          }
          solution={
            `FriendsWithVidz allows users to add YouTube videos to a public queue. Videos play in sync server side ensuring everyone is experiencing the video at the same time. When a video is played the user who queued the video is displayed and can be
            given props by other users. Users can also vote to skip the currently playing video. This creates incentives for users to play videos that the public audience will enjoy. A live chat allows users to discuss videos as they play and create an 
            alive experience.
          `
          }
        />
      </Grid>
      <Grid style={{padding: 10}} item xs={12} md={6} xl={3}>
        <ProjectCard
          title={'PredictBR'} 
          backgroundColor={'#5ee07d'}
          image={'https://raw.githubusercontent.com/Colebuildanddevelop/Portfolio/master/src/predictChoseGame.gif'}
          stack={[reactIcon, 'https://cdn-images-1.medium.com/max/400/1*uFuRJ8osF_ma0FF7Un1cag.png', 'https://png2.cleanpng.com/sh/9e4541df87ed738598d43310ee84947e/L0KzQYm3VME4N6dxiZH0aYP2gLBuTfZqepZneeVuLXPvf8brTf1me6Rmf9t3Zz3mf773lgRmel5ue9H3cz3qf7FujPUua510RdlydHj4cn68gfQ2bGRofaZvY0S5QHA7V8MxO2Q5TKMAMkO8RoOBU8A0Omc8RuJ3Zx==/kisspng-firebase-cloud-messaging-computer-icons-google-clo-github-5ad5d3ce4fc460.4730334415239628303267.png', 'https://material-ui.com/static/logo.png']}
          problem={
            `New stock traders are faced with high barriers to entry. Due to SEC requirements, one needs atleast $25,000 to start 
            day trading. Furthermore new traders are forced to compete versus an unknown player pool consisting of
            the worlds best traders and strategies.`
          }
          solution={
            `Users create tournaments varying in entry fees, entry limits, and durations. Upon entering a tournament, users are granted a simulated trading account where 
            they are free to make simulated trades. When the tournament concludes, the user with the highest simulated balance is granted all the entry fees accumulated from that tournament.
            This allows new traders to compete against a known player pool for an arbitrarily small sum of money. 
          `
          }
        />
      </Grid>
      <Grid style={{padding: 10}} item xs={12} md={6} xl={3}>
        <ProjectCard
          title={'StupidShirts'} 
          backgroundColor={'black'}
          color={'white'}
          image={'https://raw.githubusercontent.com/Colebuildanddevelop/Portfolio/master/src/StupidShirtsAddingItems.gif'}
          stack={[reactIcon, reduxIcon, 'https://png2.cleanpng.com/sh/9e4541df87ed738598d43310ee84947e/L0KzQYm3VME4N6dxiZH0aYP2gLBuTfZqepZneeVuLXPvf8brTf1me6Rmf9t3Zz3mf773lgRmel5ue9H3cz3qf7FujPUua510RdlydHj4cn68gfQ2bGRofaZvY0S5QHA7V8MxO2Q5TKMAMkO8RoOBU8A0Omc8RuJ3Zx==/kisspng-firebase-cloud-messaging-computer-icons-google-clo-github-5ad5d3ce4fc460.4730334415239628303267.png', 'https://material-ui.com/static/logo.png']}
          problem={
            `New stock traders are faced with high barriers to entry. Due to SEC requirements, one needs atleast $25,000 to start 
            day trading. Furthermore new traders are forced to compete versus an unknown player pool consisting of
            the worlds best traders and strategies.`
          }
          solution={
            `Users create tournaments varying in entry fees, entry limits, and durations. Upon entering a tournament, users are granted a simulated trading account where 
            they are free to make simulated trades. When the tournament concludes, the user with the highest simulated balance is granted all the entry fees accumulated from that tournament.
            This allows new traders to compete against a known player pool for an arbitrarily small sum of money. 
          `
          }
        />
      </Grid>
    </>
  )
}

export default Projects;