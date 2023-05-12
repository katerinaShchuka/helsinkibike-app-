const mongoose = require('mongoose');

const journeyModel = mongoose.Schema({

    id_fin: {
        type: Number,
        required: true
    },
    distance_start_time:{
        type: Number,
        required: true
    },
    return_time:{
        type: Number,
        required: true
    },
    departure_station_id:{
        type: Number,
        required: true
    },
    return_station_id:{
        type: Number,
        required: true
    },
    distance:{
        type: Number,
        required: true
    },
    durations:{
        type: Number,
        required: true
    },

}, 

{
    timepstamps: true,
})

module.exports = mongoose.model('journey', journeyModel);