const mongoose = require('mongoose');

const journeyModel = mongoose.Schema({
    Departure: {
        type: String, 
        required: [true, "Pls add Departure value"] 
        },
    Return: {
        type: String, 
        required: [true, "Pls add  Return value"] 
    },
    Departure_station_id: {
        type: Number, 
        required: [true, "Pls add Departure_station_id value"] 
    },
    Departure_station_name:{
        type: String, 
        required: [true, "Pls add Departure_station_name value"] 
    },
    Return_station_id: {
        type: Number, 
        required: [true, "Pls add Return_station_id value"] 
    },
    Return_station_name:{
        type: String, 
        required: [true, "Pls add Return_station_name value"] 
        },
    Covered_distance : {
        type: Number, 
        required: [true, "Pls add Covered_distance value"] 
    },
    Duration: {
        type: Number, 
        required: [true, "Pls add Duration value"] 
    },
}, {
    timepstamps: true,
})

module.exports = mongoose.model('journey', journeyModel);