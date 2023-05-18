import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Stations Data
function createData(id, departure, date_return, departure_station_name, return_station_name, covered_distance, duration) {
  return { id, departure, date_return, departure_station_name, return_station_name, covered_distance, duration };
}

const rows = [
  createData(
     1,
    "2021-05-31",
    "2021-06-01",	
    "Laajalahden aukio",
    "Teljäntie",
    2043,
    500
  ),
  createData(
    2,
    "2021-05-31",
    "2021-06-01",	
    "Töölöntulli",
    "Pasilan asema",
    1870,
    399
  ),
  createData(
    3,
    "2021-05-31",
    "2021-06-01",	
    "Näkinsilta",
    "Vilhonvuorenkatu",
    1025,
    1300
   ),
  createData(
    4,
    "2021-05-31",
    "2021-06-01",	
    "Koskelan varikko",
    "Paavalinpuisto",
    1713,
    1500
  ),
  createData(
    5,
    "2021-05-31",
    "2021-06-01",	
    "Kansallismuseo",
   "Stenbäckinkatu",
    2550,
    1309
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Stations() {
    
  return (
    <React.Fragment>
      <Title />
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell>Date Departure</TableCell>
            <TableCell>Date Return</TableCell>
            <TableCell>Departure Station</TableCell>
            <TableCell>Return Station</TableCell>
            <TableCell>Duration</TableCell>
            <TableCell align="right">Distance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.departure}</TableCell>
              <TableCell>{row.date_return}</TableCell>
              <TableCell>{row.departure_station_name}</TableCell>
              <TableCell>{row.return_station_name}</TableCell>
              <TableCell>{row.duration}</TableCell>
              <TableCell align="right">{`${row.covered_distance} m`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more stations
      </Link>
    </React.Fragment>
  );
}