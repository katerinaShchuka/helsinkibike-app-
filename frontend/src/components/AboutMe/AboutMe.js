import React from "react";
import './AboutMe.css';
import TitleAboutMe from "./TitleAboutMe";
import image from "./2023.jpeg";
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import CircleSharpIcon from '@mui/icons-material/CircleSharp';
import Divider from '@mui/material/Divider';

const AboutMe = () => {


return ( <div className = "titleAbout">
    <TitleAboutMe />


<div className="head">
    <p className="text">
        My name is <b>Kateryna Shchuka</b>, I am Web Developer, combined with experience in digital marketing. I came to Finland in 2022 and now I am looking for an assignment, where I can combine the both skills and fully boost your company's online business and plans.
    <br />
    <br />
        
You can look at my project here!

This is my big <b>complex project</b> and it was very challenging to me! 
<br />
<br /><b>City Bike App</b> fetches stations from database and displays them in a list of stations items from a database (using MongoDB), 
And, please, request for authorisation via ip from the author. The app features Routing (on the left side of the main menu), sort and pagination functionalities, and calculate statistics in Statistic table. Also you can add stations. 
<br />
<br />Through this, I used backend <b>(Express.js, MongoDB, Node.js, Git)</b> and frontend <b>(React, Material-UI, HTML, CSS, JavaScript)</b>. However, my prior experience on similar projects helped significantly.
<br />
<br />
<br />
 <Divider />
 <br />
<h3><i><u>Relevant Skills:</u></i></h3>

<ul>

    <ListItemIcon>
        <CheckSharpIcon color="primary" className="tire"/>
        <ListItemText primary="JavaScript, TypeScript, React.js, Redux, HTML"/>
    </ListItemIcon>
   

    <ListItemIcon>
        <CheckSharpIcon color="primary" className="tire"/>
        <ListItemText primary="Material-UI, CSS, animation and accessibility, Bootstrap" />
    </ListItemIcon>
   

    <ListItemIcon>
        <CheckSharpIcon color="primary" className="tire"/>
        <ListItemText primary="Node.js, Express.js, MongoDB, GIT" />
   </ListItemIcon>
  <br />

    <ListItemIcon>
        <CheckSharpIcon color="primary" className="tire"/>
        <ListItemText primary="Jira, Trello, Slack, SAP, AdServe" />
    </ListItemIcon>
    
</ul>

<h3><i><u>Languages:</u></i></h3>

 <ListItemIcon>
    
        <CircleSharpIcon fontSize="small" color="primary" className="circle"/>
        <ListItemText primary="English (fluent)" />
        <CircleSharpIcon fontSize="small" color="primary" className="circle"/>
        <ListItemText primary="Finnish (elementary)" />
        <CircleSharpIcon fontSize="small" color="primary" className="circle" />
        <ListItemText primary="Ukrainian (fluent)" />
        <CircleSharpIcon fontSize="small" color="primary" className="circle"/>
        <ListItemText primary="Russian (fluent)" />
        
    </ListItemIcon>
<br />
<br />
    <Divider />

</p>
      <img src={image} alt="My Image" className="image"/>

</div>

     </div>

)}

export default AboutMe;
