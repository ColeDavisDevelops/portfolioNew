import React from 'react';
import {useSpring, animated} from 'react-spring'
import Goo from '../components/Goo';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  const props = useSpring({opacity: 1, from: {opacity: 0}})
  return (
    <div>
      <animated.div style={props}>I will fade in</animated.div>
      <div style={{marginLeft: "500px"}}>
        <ProjectCard />
      </div>
    </div>
  )
}

export default Home;