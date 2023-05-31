



let data = [
    { 
        Departure: "2021-05-31 23:57:25",
        Return:"2021-06-01 0:05:46",	
        Departure_station_id: 2326, 
        Departure_station_name:"Laajalahden aukio",
        Return_station_id: 28,
        Return_station_name: "Teljäntie",
        Covered_distance: 2043,
        Duration: 500
    },
    {
  
        Departure: "2021-05-31 23:56:59",
        Return:"2021-06-01 0:07:14",	
        Departure_station_id: 2324, 
        Departure_station_name:"Töölöntulli",
        Return_station_id: 2326,
        Return_station_name: "Pasilan asema",
        Covered_distance: 1870,
        Duration: 611
    },
    {
      
        Departure: "2021-05-31 23:56:44",
        Return:"2021-06-01 0:03:26",	
        Departure_station_id: 2324, 
        Departure_station_name:"Näkinsilta",
        Return_station_id: 28,
        Return_station_name: "Vilhonvuorenkatu",
        Covered_distance: 1025,
        Duration: 399
    },
    {
     
        Departure: "2021-05-31 23:54:48",
        Return:"2021-06-01 0:00:57",	
        Departure_station_id: 292, 
        Departure_station_name:"Koskelan varikko",
        Return_station_id: 133,
        Return_station_name: "Paavalinpuisto",
        Covered_distance: 1713,
        Duration: 366
    }
  	]

let addData = {
    Departure: "2021-05-31 23:54:11",
    Return:"2021-06-01 0:17:11",	
    Departure_station_id: 34, 
    Departure_station_name:"Kansallismuseo",
    Return_station_id: 81,
    Return_station_name: "Stenbäckinkatu",
    Covered_distance: 2550,
    Duration: 1377
}

module.exports = {
    data,
    addData
}