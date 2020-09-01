import React from 'react';
import ProjectCard from '../components/ProjectCard';
import Grid from '@material-ui/core/Grid';
import stonkImg from '../static/stonkkings.png';
import friendsImg from '../static/friends.png';
import predictImg from '../static/predict.png';
import stupidShirtsImg from '../static/stupidshirts.png';
import notRedditImg from '../static/reddit.png';
import playlisterImg from '../static/playlister.png';
import railsIcon from '../static/rails.svg';
import postgresqlIcon from '../static/postgresql.svg';
import bootstrapIcon from '../static/bootstrap.svg';
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
      <Grid style={{padding: 10}} item xs={12} md={6} xl={4}>
        <ProjectCard
          title={'StonkKings'} 
          timeout={250}
          backgroundColor={'#ff6637'}
          image={stonkImg}
          stack={[reactIcon, reduxIcon, nodeIcon, mongoIcon]}
          description={
            `StonkKings gives users the opportunity to create and participate in tournaments varying in entry fees, entry limits, and durations. Upon entering a tournament, users are granted a simulated trading account which they use
            to make simulated trades. When the tournament concludes, the user with the highest account balance is granted all the entry fees accumulated from that tournament's entries.
            I created StonkKings to allow new traders to compete against a known player pool for an arbitrarily small sum of money as well as reinvent meta strategies when it comes to generating returns trading stocks. 
            The backend was written with model, view, and controller design patterns using NodeJs, Mongoose, and MongoDb. The frontend was created with react and redux for central state management, and Material UI for styling.`
          }
          website={"https://stonk-kings.herokuapp.com/"}
          github={"https://github.com/Colebuildanddevelop/TKings"}
        />
      </Grid>
      <Grid style={{padding: 10}} item xs={12} md={6} xl={4}>
        <ProjectCard
          title={'FriendsWithVidz'} 
          timeout={500}
          backgroundColor={'#9356ff'}
          image={friendsImg}
          stack={[reactIcon, reduxIcon, 'https://firebase.google.com/downloads/brand-guidelines/SVG/logo-logomark.svg', 'https://material-ui.com/static/logo.png']}
          description={
            `Watching YouTube with friends can be a tedious task when you have to ensure that the video you're watching is synced up with everyone elses. 
            FriendsWithVidz allows users to add YouTube videos to a public queue. Videos play server side ensuring everyone is experiencing the video at the same time. While a video is being played, the user who queued the video is displayed. 
            This grants the viewing audience the ability to express their liking for the video, or to cast a vote to skip the video. I added this feature to create incentives for users to only queue videos that the viewing party will enjoy.
            Furthermore a live chat allows for discussion create an alive, social experience. FriendsWithVidz was created with Firebase, React, Redux, and Material UI.
            `
          }
          website={"https://friendswithvids.firebaseapp.com/"}
          github={"https://github.com/Colebuildanddevelop/friendswithvids"}
        />
      </Grid>
      <Grid style={{padding: 10}} item xs={12} md={6} xl={4}>
        <ProjectCard
          title={'PredictBR'} 
          timeout={750}
          backgroundColor={'#86ffa3'}
          image={predictImg}
          stack={[reactIcon, 'https://cdn-images-1.medium.com/max/400/1*uFuRJ8osF_ma0FF7Un1cag.png', 'https://firebase.google.com/downloads/brand-guidelines/SVG/logo-logomark.svg', 'https://material-ui.com/static/logo.png']}
          description={
            `PredictBr aims to solve the same descriptionthat Stonk Kings solves. Reduce barriers to entry for new traders and create a new paradigm of competition.`
          }
          website={"https://valueisright.firebaseapp.com/"}
          github={"https://github.com/Colebuildanddevelop/PredictBr"}
        />
      </Grid>
      <Grid style={{padding: 10}} item xs={12} md={6} xl={4}>
        <ProjectCard
          title={'StupidShirts'} 
          timeout={1000}
          backgroundColor={'#909090'}
          image={stupidShirtsImg}
          stack={[reactIcon, reduxIcon, 'https://firebase.google.com/downloads/brand-guidelines/SVG/logo-logomark.svg', 'https://material-ui.com/static/logo.png']}
          description={
            `A store front application that I could use as a template to create multiple online stores for myself and others.`
          }
          website={"https://stupid-shirts.firebaseapp.com/"}
          github={"https://github.com/Colebuildanddevelop/StupidShirts"}
        />
      </Grid>
      <Grid style={{padding: 10}} item xs={12} md={6} xl={4}>
        <ProjectCard
          title={'Playlister'} 
          timeout={1250}
          backgroundColor={'#fc6464'}
          image={playlisterImg}
          stack={[reactIcon, railsIcon, bootstrapIcon, postgresqlIcon]}
          description={`
            A platform that allows users to create their own playlist and share it with the world! Users can vote on which playlist they think is best and sort playlists by popularity. 
            Created using the YouTube API, Ruby and Rails for object relational mapping, JWT for user authentication, PostgreSQL for data storage and React Bootstrap for styling.
          `}
          website={"https://stupid-shirts.firebaseapp.com/"}
          github={"https://github.com/Colebuildanddevelop/StupidShirts"}
        />
      </Grid>
      <Grid style={{padding: 10}} item xs={12} md={6} xl={4}>
        <ProjectCard
          title={'NotReddit'} 
          timeout={1500}
          backgroundColor={'royalblue'}
          image={notRedditImg}
          stack={[railsIcon]}
          description={`
            Platform that allows users to make posts in different user created categories, as well as create categories themselves and subscribe to these categories.
            Users can like and comment on posts as well as sort posts by popularity. NotReddit was created using a Rails backend for ORM, embedded ruby for the frontend and MySQL for data
            persistence.  
          `}
          website={"https://stupid-shirts.firebaseapp.com/"}
          github={"https://github.com/Colebuildanddevelop/StupidShirts"}
        />
      </Grid>
    </>
  )
}

export default Projects;