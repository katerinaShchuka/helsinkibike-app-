const mongoose = require('mongoose');

const stationModel = mongoose.Schema({

    id_fin: {
        type: Number,
        required: true
    },
    name:{
        type: Number,
        required: [true, "Pls add name value"]
    },
    address:{
        type: String,  
    },
    town:{
        type: String,  
    },

}, 

{
    timepstamps: true,
})

module.exports = mongoose.model('station', stationModel);