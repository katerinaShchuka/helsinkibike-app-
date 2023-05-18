import * as React from 'react';
import Typography from '@mui/material/Typography';
import './HomePage.css'

const TitleHome = () => {
  return (
    <div className="title">
    <Typography component="h2" variant="h3" color="primary" gutterBottom>
      Stations
    </Typography>
    </div>
  );
}



export default TitleHome;