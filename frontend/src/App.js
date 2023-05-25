import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage.js';
import JourneyTable from './components/JourneyTable/JourneyTable';
import StationTable from './components/StationTable/StationTable';
import Dashboard from './material-ui/Dashboard.js';
import AboutMe from './components/AboutMe/AboutMe.js';
import Stations from './material-ui/Stations'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
     <Routes>

          <Route path="/" element={<HomePage/>} />
          <Route path="/journey" element={<JourneyTable  />} />
          <Route path="/stationtable" element={<StationTable />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/stations" element={<Stations />} />
        
      </Routes>
     </BrowserRouter>
          </div>


  );
}

export default App;
