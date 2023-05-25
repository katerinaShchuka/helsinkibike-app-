import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { Link } from 'react-router-dom';

import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import AssignmentIcon from '@mui/icons-material/Assignment';


export const mainListItems = (

  <React.Fragment>

    <ListItemButton>
     <ListItemIcon>
        <AccountCircleIcon />
      </ListItemIcon>
      <Link to="/aboutme"><ListItemText primary="About Me" /></Link>
    </ListItemButton>


    <ListItemButton>
     <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      
        <Link to="/dashboard"><ListItemText primary="Dashboard" /></Link>

    
 </ListItemButton>
   
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      
        <Link to="/stations"><ListItemText primary="Stations" /></Link>

    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <Link to="/stationtable"><ListItemText primary="Statistic" /></Link>
    </ListItemButton>
        
  </React.Fragment>
);


export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Tables
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Statistic per month" />
    </ListItemButton>

   
  </React.Fragment>
);