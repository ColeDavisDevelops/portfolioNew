import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Typography from '@material-ui/core/Typography';

const Blogs = () => {
  const classes = {
    container: {
      minHeight: 550 
    },
    description: {
      color: 'rgb(170, 170, 170)'
    }
  }
  return (
    <div style={classes.container}>
      <style type="text/css">
        {`
        .carousel-control-prev-icon {
          z-index: 10;
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='white' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e");
        }
        .carousel-control-next-icon {
          z-index: 10;
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='white' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e");
        }
        .carousel-indicators li {
          background-color: white;
        }
        .carousel-caption {
          position: relative;
          left: 0;
          top: 0;
        }
        .image {
          max-width: 250px;
          max-height: 250px;
          margin: auto;
          min-width: 250px;
          min-height: 250px;
        }
        `}
      </style>
      <Typography style={{width: '100%', fontWeight: 'bold', marginBottom: 20, textDecoration: 'underline'}} variant="h3" align="center">
        Blogs
      </Typography>
      <Carousel 
        style={{display: 'block', margin: 'auto'}}
      >
        <Carousel.Item>
          <img
            className="d-block w-100 image"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/PokerStars_emblem.svg/1200px-PokerStars_emblem.svg.png"
            alt="Poker"
          />
          <Carousel.Caption>
            <h3>Screen Scraping for Real-time Poker Data</h3>
            <p style={classes.description}>The plan is to take a screenshot of the cards dealt to me on poker stars. Convert the screenshots into a hash and manually map the hashes to their values in a python dictionary.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 image"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Icon-Vim.svg/768px-Icon-Vim.svg.png"
            alt="Vim"
          />
          <Carousel.Caption>
            <h3>Why I am Learning Vim</h3>
            <p style={classes.description}>Vim is a highly configurable text editor built to enable efficient text editing. It is an improved version of the vi editor distributed…</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 image"
            src="https://image.flaticon.com/icons/svg/2948/2948410.svg"
            alt="Two Generals"
          />
          <Carousel.Caption>
            <h3>The Flaws of Communication</h3>
            <p style={classes.description}>Imagine two groups of allied gangs each on opposing sides of a city (A and B). In between them is a rival gang(C). The outer city gangs…</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 image"
            src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
            alt="Node Js"
          />
          <Carousel.Caption>
            <h3>Quick Start: Node.Js, Express, MongoDB</h3>
            <p style={classes.description}>Welcome Developers, I am going to explain how to get started with Node.js, Express and MongoDb. I won’t go into depth explaining the code…</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Blogs;