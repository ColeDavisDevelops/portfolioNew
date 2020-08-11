import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Title from '../components/Title';
import FlipCard from '../components/FlipCard';

const useStyles = makeStyles((theme) => ({
  title: {
    position: 'absolute',
    width: '100%',
    top: '40%'
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <> 
      <div className={classes.title}>
        {/* <Title/> */}
        <FlipCard />
      </div>

    </>
  )
}

export default Home;