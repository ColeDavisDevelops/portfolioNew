import React from 'react';
import ProjectCard from '../components/ProjectCard';
import Grid from '@material-ui/core/Grid';
import stonkGif from '../stonk.gif';

const Projects = () => {

  return (
    <Grid container xs={12} style={{ padding: 100}}>
      <Grid style={{padding: 10}} item xs={12} md={3}>
        <ProjectCard
          title={'StonkKings'} 
          backgroundColor={'#d84315'}
          image={stonkGif}
        />
      </Grid>
      <Grid style={{padding: 10}} item xs={12} md={3}>
        <ProjectCard
          title={'PredictBR'} 
          backgroundColor={'#5ee07d'}
          image={'https://raw.githubusercontent.com/Colebuildanddevelop/Portfolio/master/src/predictChoseGame.gif'}
        />
      </Grid>
      <Grid style={{padding: 10}} item xs={12} md={3}>
        <ProjectCard
          title={'FriendsWithVidz'} 
          backgroundColor={'#673ab7'}
          color={'white'}
          image={'https://raw.githubusercontent.com/Colebuildanddevelop/Portfolio/master/src/fwv.gif'}
        />
      </Grid>
      <Grid style={{padding: 10}} item xs={12} md={3}>
        <ProjectCard
          title={'StupidShirts'} 
          backgroundColor={'black'}
          color={'white'}
          image={'https://raw.githubusercontent.com/Colebuildanddevelop/Portfolio/master/src/StupidShirtsAddingItems.gif'}
        />
      </Grid>
    </Grid>
  )
}

export default Projects;