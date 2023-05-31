const mongoose = require('mongoose');

const journeyStatisticModel = mongoose.Schema({
    date: {
        type: String, 
        required: [true, "Pls add date value"] 
    },
    Departure_station_id: {
        type: Number, 
        required: [true, "Pls add Departure_station_id value"] 
    },
    Return_station_id: {
        type: Number, 
        required: [true, "Pls add Return_station_id value"] 
    },
    total_distance_per_month: {
        type: Number, 
        required: [true, "Pls add total_distance_per_month value"] 
    },
    total_journey_per_month: {
        type: Number, 
        required: [true, "Pls add total_journey_per_month_id value"] 
    },
}, {
    timepstamps: true,
})

module.exports = mongoose.model('journeyStatistic', journeyStatisticModel);