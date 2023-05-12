const mongoose = require('mongoose');

const journeyStatisticModel = mongoose.Schema({

    month_year: {
        type: Data,
        required: true
    },
    distance_station_id:{
        type: Number,
        required: true
    },
    return_station_id:{
        type: Number,
        required: true
    },
    total_distance_per_month:{
        type: Number,
        required: true
    },
    total_journey_per_month:{
        type: Number,
        required: true
    },

}, 

{
    timepstamps: true,
})

module.exports = mongoose.model('journeyStatistic', journeyStatisticModel);