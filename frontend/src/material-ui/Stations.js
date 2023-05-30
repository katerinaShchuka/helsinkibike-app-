import React, {useEffect, useState} from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';


// Generate Stations Data




function getDataStations() {

    const url = "/api/stations/";

    let method = "GET";

    let res 
     
    const fetchData = async (url, method) => {
        try {
            const response = await fetch(url, {
                method: method,
                mode: 'no-cors'
            })

            const json = await response.json();


            res = json
            console.log(json);
         
        } catch (error) {
            console.log("error", error);
        }
    }

    fetchData(url, method);

    return res;
};


export default function Stations() {
    
  const [stationList, setStationList] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
   async function fetchData() {


    // You can await here
    const response = await getDataStations()
    setStationList(response)
    setIsLoading(false)
    
  }
  fetchData()


  })

  return (
    <React.Fragment>
      <Title />
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell>Finnish id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Departure</TableCell>
            <TableCell>Arrival</TableCell>
            <TableCell>Total Journeys Starting</TableCell>
            <TableCell>Total Journeys Ending</TableCell>
          </TableRow>
        </TableHead>
         <TableBody>
          {console.log(stationList)}
          {console.log('stationList')}
          {!isLoading && stationList.map((row) => (
            <TableRow key={row._id}>
              <TableCell>{row.fid}</TableCell>
              <TableCell>{row.Name}</TableCell>
              <TableCell>{row.Address}</TableCell>
              <TableCell>{row.x}</TableCell>
              <TableCell>{row.y}</TableCell>
              <TableCell>{row.total_journeys_starting}</TableCell>
              <TableCell>{row.total_journeys_ending} </TableCell>
            </TableRow>
          ))}
        </TableBody>  
      </Table>
      {/* <Link color="primary" href="#" sx={{ mt: 3 }}>
        See more stations
      </Link> */}
    </React.Fragment>
  );
}