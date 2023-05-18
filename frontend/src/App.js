import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, Routes} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import JourneyTable from './components/JourneyTable/JourneyTable';
import StationTable from './components/StationTable/StationTable';


function App() {

  const {data, setData} = useState();
  useEffect(()=>{
    fetch('/api/stations/',{
     method:"GET",
     mode: 'no-cors'
    },[])
  .then(res => res.json())
  .then(dataNew => console.log(dataNew))
  .catch(error => console.error(error));
  })

  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage/>}>
          <Route path="joureyTable" element={<JourneyTable />} />
          <Route path="stationTable" element={<StationTable />} />
        </Route>
      </Routes>
    </BrowserRouter>
          </div>
  );
}

export default App;
