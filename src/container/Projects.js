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
    <Grid className={classes.workContainer} container item xs={12} >
      <Grid style={{padding: 10}} item xs={12} md={6} xl={3}>
        <ProjectCard
          title={'StonkKings'} 
          backgroundColor={'#d84315'}
          image={stonkGif}
          stack={[reactIcon, reduxIcon, nodeIcon, mongoIcon]}
          description={"lorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem lorem"}
        />
      </Grid>
      <Grid style={{padding: 10}} item xs={12} md={6} xl={3}>
        <ProjectCard
          title={'PredictBR'} 
          backgroundColor={'#5ee07d'}
          image={'https://raw.githubusercontent.com/Colebuildanddevelop/Portfolio/master/src/predictChoseGame.gif'}
          stack={[reactIcon, 'https://cdn-images-1.medium.com/max/400/1*uFuRJ8osF_ma0FF7Un1cag.png', 'https://png2.cleanpng.com/sh/9e4541df87ed738598d43310ee84947e/L0KzQYm3VME4N6dxiZH0aYP2gLBuTfZqepZneeVuLXPvf8brTf1me6Rmf9t3Zz3mf773lgRmel5ue9H3cz3qf7FujPUua510RdlydHj4cn68gfQ2bGRofaZvY0S5QHA7V8MxO2Q5TKMAMkO8RoOBU8A0Omc8RuJ3Zx==/kisspng-firebase-cloud-messaging-computer-icons-google-clo-github-5ad5d3ce4fc460.4730334415239628303267.png', 'https://material-ui.com/static/logo.png']}
          description={"lorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem lorem"}
        />
      </Grid>
      <Grid style={{padding: 10}} item xs={12} md={6} xl={3}>
        <ProjectCard
          title={'FriendsWithVidz'} 
          backgroundColor={'#673ab7'}
          color={'white'}
          image={'https://raw.githubusercontent.com/Colebuildanddevelop/Portfolio/master/src/fwv.gif'}
          stack={[reactIcon, reduxIcon, 'https://png2.cleanpng.com/sh/9e4541df87ed738598d43310ee84947e/L0KzQYm3VME4N6dxiZH0aYP2gLBuTfZqepZneeVuLXPvf8brTf1me6Rmf9t3Zz3mf773lgRmel5ue9H3cz3qf7FujPUua510RdlydHj4cn68gfQ2bGRofaZvY0S5QHA7V8MxO2Q5TKMAMkO8RoOBU8A0Omc8RuJ3Zx==/kisspng-firebase-cloud-messaging-computer-icons-google-clo-github-5ad5d3ce4fc460.4730334415239628303267.png', 'https://material-ui.com/static/logo.png']}
          description={"lorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem lorem"}
        />
      </Grid>
      <Grid style={{padding: 10}} item xs={12} md={6} xl={3}>
        <ProjectCard
          title={'StupidShirts'} 
          backgroundColor={'black'}
          color={'white'}
          image={'https://raw.githubusercontent.com/Colebuildanddevelop/Portfolio/master/src/StupidShirtsAddingItems.gif'}
          stack={[reactIcon, reduxIcon, 'https://png2.cleanpng.com/sh/9e4541df87ed738598d43310ee84947e/L0KzQYm3VME4N6dxiZH0aYP2gLBuTfZqepZneeVuLXPvf8brTf1me6Rmf9t3Zz3mf773lgRmel5ue9H3cz3qf7FujPUua510RdlydHj4cn68gfQ2bGRofaZvY0S5QHA7V8MxO2Q5TKMAMkO8RoOBU8A0Omc8RuJ3Zx==/kisspng-firebase-cloud-messaging-computer-icons-google-clo-github-5ad5d3ce4fc460.4730334415239628303267.png', 'https://material-ui.com/static/logo.png']}
          description={"lorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem lorem"}
        />
      </Grid>
    </Grid>
  )
}

export default Projects;