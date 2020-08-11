import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import Button from '@material-ui/core/Button';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const FlipCard = () => {
  const [flipped, setFlipped] = useState(false);
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });
  return (
    <div style={{marginLeft: 300}} >
      <a.div 
        class="c back" 
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ opacity: opacity.interpolate(o => 1 - o), transform: props.xys.interpolate(trans) }} 
      >
        <Button 
          onClick={() => setFlipped(state => !state)}
          fullWidth
          variant="contained"
        >
          FLIP!
        </Button>
      </a.div>

      <a.div 
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        class="c front" 
        style={{ opacity, transform: props.xys.interpolate(trans) }} 
      >
        <Button 
          onClick={() => setFlipped(state => !state)}
          fullWidth
          variant="contained"
        >
          FLIP!
        </Button>
      </a.div>
    </div>
  )
}

export default FlipCard;