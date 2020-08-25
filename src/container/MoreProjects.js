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
        icons={[railsIcon, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAnFBMVEXp6eD////sZjDZ18rp6+PsXBzqzbzsZCzrXh/tdUj//fzp7+frWxjrWRLsYin2vq3k5Nn62M7ucUDwimfufVP86+X1taLqw7D62s/qsZrsaTPp3tLqrZTreEzxknL508frmnztbTvroobq1cfqqY7quKL3w7PzpIv+9vP0rJXqUAD29vLrhl/qtJ7rflXp2sz75N34yr3xl3npRwCQln5eAAAG+0lEQVR4nO3da1/aPBgHYOha2kFbREBUHhF0IuLm1H3/7/bQpCnpgTbnJvnlfuPsIeTyX9KWRjcYttW7P+il/PfWblHVoG1lT75TXbX2S5jwvTfg4OqHMGJbQ/0BT0JhxJZ2eowwE4oitjTT37sQCgURdRaKIWotFELUWyiCqLlQAFF3IT9ReyE3UX8hL9EAISfRBCEf0QghF9EMIQ/RECEH0RQhO9EYITPRHCEr0SAhI9EkIRvRKCET0SwhC9EwIQPRNCE90TghNdE8IS3RQCEl0UQhHdFIIRXRTCEN0VAhBdFUITnRWCEx0VwhKdFgISHRZCEZ0WghEdFsIQnRcCEB0XRhN9F4YSfRfGEX0QJhB9EGYTvRCmErUVPh4IquWuaj6iqkLN8JnVD7ckIn1L+c0An1Lyd0Qv3LCWUI/clkQtMC7faVvdULJ6Pt/Gk9Id9+/TTfjsi3r5R64eQuSdMoHpG24Y/iKE2T/1iJyoWTu9g7VegR9zAMsx2YiaqFpwQ9UMGKrBF/FcAdYkaiYmEB9KIXQuFLlO/BmKJaYX6Igv4+Ewqf0c+EMUWlwnOCXjon7e3kd+rxpKhSiCWYPlDs95DypKhQiCf4MCBvwseIDCmqE5YTpLqm4UpRmZA1QdBJHqIqIXuCoJccREVCngRBN9mJaoQ4cMEA5BlulAj5DtG8o6wpqhDyHqJ5T322FBUIRSQIusqWonxh6T3o89xZsqUoXSgqQdBZlhRlC0vvQa4EQW8HC2qiZCGeINtpotJdeqJcoZhRtNRfaqJUIf+JvqHDGJFouJEpFH2I5j2mTFGiUEaCoMs+VYryhJM/MhIEfcZTvOsiShP6z0dBJ/qGtvEUuz7RkiacbFEnwg+hCYJeDz5C9OPbdoQoTzhHwuAv8zOHy63/DZCw60M7ecIn9ElueL8WnuH6HmUYPfUl9NfFSBqGgon+2kNAL+5qW+JYuirG0tATSsQS9OJVb2NpRkykEPEEk06g3GsaLEVxB2rpEO0GSr4ulZAiZYLS7y2Ep0iboPz7QyxFEScNfJAhSlDBPf5K5EmDPkEVn9NgBypvigwJKvmsTdhwQz3IwL2kC4WlSHeiP+8mXyhouGE6RAeqnlsIuIBjTFDZsyfuFFkTVPf8kDNF5gQVPgPmSpE9QZXP8TlOGhwJKp2LwXzS4ElQ7XwaxhT5gGrnRDGlyHWIDlTPa1thD2qI57Vhj0UZgKrnJp5TJJ0k7I8SngTVzy9dccwvZQKqnyOMUiTPMOZJsI953qskGzjSa+L34S57H4aMCfYyV38VRVGwoxhLd8FpD1ZgL79vsb779UI1v/Tl1x3F72dUd1cvPBkpfwXGn3A823G/9+SE+pcTOqH+5YROqH85oRPqX07ohPqXEzqh/uWETqh/OaET6l9O6IT6lxM6of7lhE6ofzEKTSom4cikYhLu4sCUindMwp/FXDrtK/zphE6oezmhE+pfTuiE+pcTOqH+JUKYRqBqbefLiz9C0l6oQ/C7tNZaY5uXX1ykMH2dgqp1ZrPPFu93cNv0ZtpWN9AUPoCdpt/NxHQL1u6vi7+/A198f+knIkQY38Jl95UjN7qBy/PeRIfLzZ1qDGNI5/m3iddQYTSGqxfoteIZXBA3bS5MCF9kzCc8lIXDbVMq0euwKnw0VrhsCjFZai4cF5U3gy2oCoe/6yGeV2opxMfSI8xieayNpWfEYz3E5FZvId7VXFhHnIW1kQvvqzHCer8w4bR6kgv2lgnHUbXB8+vbIRy+lsea6M064fJYWhVjpxtLhMM5HmK6wdbYIrzFx9rk0y7hZ/VlwgdsuQ3CN/Cm2wfFivgrW3C4sUZ4MwVfUrRv6MHFFgmvwZc3dNbPGwunfQrjpFzHNx7hEbzjDmisScBROzv2KRwuq3XgESZb8HUDTxjpN/wu6VV4qdiEUQJusT5hiPBUcYgjm4Q5BljSRXmhHcK8Z1/ZNvBUcbqf6ld4W6nZkkuILmLC0Avv4QskXq/CcZTEpTpynS0iNLqc/pWfKk6jTr9CsefDCJ0hDkGY/+O0tWXCnPMdb6uLbBGG8Lrm8x/cOmvfMiH6bA1GOMs2tk1YuukFVze2CfEPLuAVqnVC1MR5gW3CcFe8ImzdOqGXoCvCGdzUPmEx1uR3UfYJ0ViD7oQvCpOwVoYI09fHrNDz0ovC++tq5Q/XtRd6KZjKjD4aviis12NgiLDSJoUwdkLauRgWC4MZfB7fIARP6JuF2ZpmIdjpshCsLoTBIzYZAC+R70PSOVH1VU0TShjnRNWr+B/D3Lw2J9S+nNAJ9a/84TGtcHN5PqduVfqwh1y4apz+qWUlKybhcNEy71irihYtijbh+CMx4UBNk49xi6JNOBx+bXZ997+zdpuvVsP/eKcwoyPlpsoAAAAASUVORK5CYII=", "https://image.flaticon.com/icons/svg/29/29165.svg"]}
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