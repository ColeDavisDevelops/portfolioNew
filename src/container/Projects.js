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
          timeout={250}
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
          website={"https://stonk-kings.herokuapp.com/"}
          github={"https://github.com/Colebuildanddevelop/TKings"}
        />
      </Grid>
      <Grid style={{padding: 10}} item xs={12} md={6} xl={3}>
        <ProjectCard
          title={'FriendsWithVidz'} 
          timeout={500}
          backgroundColor={'#673ab7'}
          color={'white'}
          image={'https://raw.githubusercontent.com/Colebuildanddevelop/Portfolio/master/src/fwv.gif'}
          stack={[reactIcon, reduxIcon, 'https://firebase.google.com/downloads/brand-guidelines/SVG/logo-logomark.svg', 'https://material-ui.com/static/logo.png']}
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
          website={"https://friendswithvids.firebaseapp.com/"}
          github={"https://github.com/Colebuildanddevelop/friendswithvids"}
        />
      </Grid>
      <Grid style={{padding: 10}} item xs={12} md={6} xl={3}>
        <ProjectCard
          title={'PredictBR'} 
          timeout={750}
          backgroundColor={'#5ee07d'}
          image={'https://raw.githubusercontent.com/Colebuildanddevelop/Portfolio/master/src/predictChoseGame.gif'}
          stack={[reactIcon, 'https://cdn-images-1.medium.com/max/400/1*uFuRJ8osF_ma0FF7Un1cag.png', 'https://firebase.google.com/downloads/brand-guidelines/SVG/logo-logomark.svg', 'https://material-ui.com/static/logo.png']}
          problem={
            `PredictBr aims to solve the same problem that Stonk Kings solves. Reduce barriers to entry for new traders and create a new paradigm of competition.`
          }
          solution={
            `All tournaments game state and user funds are handled by solidity code I wrote hosted on Ethereum. This decentralized backend results in pure transparency for users. 
             The aim of the competetion is to predict the closing price of the given asset at the end of a given duration. Once a tournaemnt has started predictions are no longer accepted. To make a prediction users must pay an associated fee.
             Users can make as many predicions as they please before the tournament starts. When the tournament concludes, the user with the closest prediction to the assets price at that time will be awarded the accumulated fees from all user predictions. 
            `
          }
          website={"https://valueisright.firebaseapp.com/"}
          github={"https://github.com/Colebuildanddevelop/PredictBr"}
        />
      </Grid>
      <Grid style={{padding: 10}} item xs={12} md={6} xl={3}>
        <ProjectCard
          title={'StupidShirts'} 
          timeout={1000}
          backgroundColor={'black'}
          color={'white'}
          image={'https://raw.githubusercontent.com/Colebuildanddevelop/Portfolio/master/src/StupidShirtsAddingItems.gif'}
          stack={[reactIcon, reduxIcon, 'https://firebase.google.com/downloads/brand-guidelines/SVG/logo-logomark.svg', 'https://material-ui.com/static/logo.png']}
          problem={
            `My first ReactJs project. I wanted to create a store front application that I could use as a template to create multiple online stores for myself and others.`
          }
          solution={
            `Created a custom stripe checkout experience using the stripe API in order to ensure PCI compliance. Used local storage to handle user shopping cart data. 
            Used redux for central application state management. Styled with material ui. 
          `
          }
          website={"https://stupid-shirts.firebaseapp.com/"}
          github={"https://github.com/Colebuildanddevelop/StupidShirts"}
        />
      </Grid>
    </>
  )
}

export default Projects;