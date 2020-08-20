import React from 'react';
import reactIcon from '../static/react.svg';
import railsIcon from '../static/rails.svg';
import postgresqlIcon from '../static/postgresql.svg';
import bootstrapIcon from '../static/bootstrap.svg';
import cliGif from '../static/cli.gif';
import notRedditGif from '../static/notReddit.gif';
import playlisterGif from '../static/playlister.gif';
import ProjectCardSecondary from '../components/ProjectCardSecondary';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({

}));


const MoreProjects = () => {

  const classes = useStyles();
  return (
    <>
      <Typography style={{width: '100%', fontWeight: 'bold', marginBottom: 20, textDecoration: 'underline'}} variant="h3" align="center">
        Group Projects
      </Typography>
      <ProjectCardSecondary 
        title={"Playlister"}
        icons={[reactIcon, railsIcon, bootstrapIcon, postgresqlIcon]}
        image={playlisterGif}
        description={`
          Playlister is a platform that allows users to create their own playlist and share it with the world! Users can vote on which playlist they think is best and sort playlists by popularity. 
          Created using the YouTube API, Ruby and Rails for object relational mapping, JWT for user authentication, PostgreSQL for data storage and React Bootstrap for styling.
        `}
        github={'https://github.com/Colebuildanddevelop/mod4-project'}
        demo={'https://www.youtube.com/watch?v=4YI3ROmPnB8&feature=youtu.be'}
      />
      <ProjectCardSecondary 
        title={"Not Reddit"}
        icons={[railsIcon, "https://cdn.iconscout.com/icon/premium/png-512-thumb/erb-file-1931083-1633663.png", "https://image.flaticon.com/icons/svg/29/29165.svg"]}
        image={notRedditGif}
        description={`
          NotReddit is a platform that allows users to make posts in different user created categories, as well as create categories themselves and subscribe to these categories.
          Users can like and comment on posts as well as sort posts by popularity. NotReddit was created using a Rails backend for ORM, embedded ruby for the frontend and MySQL for data
          persistence.  
        `}
        github={'https://github.com/Colebuildanddevelop/Mod2-project'}
        demo={'https://www.youtube.com/watch?v=DjTKA2AZJ0M'}
      />
      <ProjectCardSecondary 
        last={true}
        title={"The Efficient Workout"}
        icons={[railsIcon, "https://image.flaticon.com/icons/svg/29/29165.svg"]}
        image={cliGif}
        description={`
          The Efficient Workout is a command line interface that allows users to record 
          information about their workouts, search through various listed trainers as well as be suggested a trainer based 
          on their workout preferences.
        `}
        github={'https://github.com/Colebuildanddevelop/thach_cole_project'}
        demo={'https://www.youtube.com/watch?v=ufxFC39xr70'}
      />
    </>
  )
}

export default MoreProjects;