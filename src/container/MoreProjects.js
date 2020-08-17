import React from 'react';
import reactIcon from '../static/react.svg';
import railsIcon from '../static/rails.svg';
import postgresqlIcon from '../static/postgresql.svg';
import bootstrapIcon from '../static/bootstrap.svg';
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
      <Typography style={{width: '100%', fontWeight: 'bold', marginBottom: 20}} variant="h3" align="center">
        Group Projects
      </Typography>
      <ProjectCardSecondary 
        title={"Playlister"}
        icons={[reactIcon, railsIcon, bootstrapIcon, postgresqlIcon]}
        image={'https://im2.ezgif.com/tmp/ezgif-2-7ce5c67ef82d.gif'}
        description={'II am a problem solver who codesI am a problem solver who codesI am a problem solver who codesI am a problem solver who codesI am a problem solver who codesI am a problem solver who codesI am a problem solver who codesI am a problem solver who codesI am a problem solver who codes am a problem solver who codes'}
      />
      <ProjectCardSecondary 
        title={"Not Reddit"}
        icons={[railsIcon, "https://cdn.iconscout.com/icon/premium/png-512-thumb/erb-file-1931083-1633663.png", "https://image.flaticon.com/icons/svg/29/29165.svg"]}
        image={'https://im2.ezgif.com/tmp/ezgif-2-e9e6c4f98b2e.gif'}
        description={'II am a problem solver who codesI am a problem solver who codesI am a problem solver who codesI am a problem solver who codesI am a problem solver who codesI am a problem solver who codesI am a problem solver who codesI am a problem solver who codesI am a problem solver who codes am a problem solver who codes'}
      />
      <ProjectCardSecondary 
        last={true}
        title={"Workout Assistant"}
        icons={[railsIcon, "https://image.flaticon.com/icons/svg/29/29165.svg"]}
        image={'https://im2.ezgif.com/tmp/ezgif-2-f0602360f698.gif'}
        description={'II am a problem solver who codesI am a problem solver who codesI am a problem solver who codesI am a problem solver who codesI am a problem solver who codesI am a problem solver who codesI am a problem solver who codesI am a problem solver who codesI am a problem solver who codes am a problem solver who codes'}
      />
    </>
  )
}

export default MoreProjects;