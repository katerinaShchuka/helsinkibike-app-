import * as React from 'react';
import Typography from '@mui/material/Typography';
import './AboutMe.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


const TitleAboutMe = () => {
  return (
    <div className="title">

        <React.Fragment>

    <ListItemButton>
        <ListItemIcon>
        <AccountCircleIcon fontSize = "large" color="primary" className ="icon"/>
        </ListItemIcon>

        <ListItemText>
    <Typography component="h4" variant="h4" color="primary" gutterBottom>
      About Me
    </Typography>
    </ListItemText>
    </ListItemButton>

    </React.Fragment>

    </div>
  );
}



export default TitleAboutMe;