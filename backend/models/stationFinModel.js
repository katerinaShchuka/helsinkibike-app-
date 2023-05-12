const mongoose = require('mongoose');

const stationFinModel = mongoose.Schema({

    id_fin: {
        type: Number,
        required: true
    },
    name:{
        type: Number,
        required: [true, "Pls add text value"]
    },
    address:{
        type: String,
       
    },

}, 

{
    timepstamps: true,
})

module.exports = mongoose.model('stationFin', stationFinModel);