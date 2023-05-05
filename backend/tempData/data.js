let data = [
    { 
        _id: 1,
        departure: "2021-05-31 23:57:25",
        return:"2021-06-01 0:05:46",	
        departure_station_id: 94, 
        departure_station_name:"Laajalahden aukio",
        return_station_id: 100,
        return_station_name: "Teljäntie",
        covered_distance: 2043,
    
        duration: 500
    
    
    },
    {
        _id:2,
        departure: "2021-05-31 23:56:59",
        return:"2021-06-01 0:07:14",	
        departure_station_id: 82, 
        departure_station_name:"Töölöntulli",
        return_station_id: 113,
        return_station_name: "Pasilan asema",
        covered_distance: 1870,
        duration: 611
    },
    {
        _id:3,
        departure: "2021-05-31 23:56:44",
        return:"2021-06-01 0:03:26",	
        departure_station_id: 123, 
        departure_station_name:"Näkinsilta",
        return_station_id: 121,
        return_station_name: "Vilhonvuorenkatu",
        covered_distance: 1025,
        duration: 399
    },
    {
        _id:4,
        departure: "2021-05-31 23:54:48",
        return:"2021-06-01 0:00:57",	
        departure_station_id: 292, 
        departure_station_name:"Koskelan varikko",
        return_station_id: 133,
        return_station_name: "Paavalinpuisto",
        covered_distance: 1713,
        duration: 366
    }
  	]

let addData = {
    _id:5,
    departure: "2021-05-31 23:54:11",
    return:"2021-06-01 0:17:11",	
    departure_station_id: 34, 
    departure_station_name:"Kansallismuseo",
    return_station_id: 81,
    return_station_name: "Stenbäckinkatu",
    covered_distance: 2550,
    duration: 1377
}

module.exports = {data, addData}