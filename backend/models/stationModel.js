
const mongoose = require('mongoose');

const stationModel = mongoose.Schema({
    fid:{
        type: Number,
        required: [true, "Pls add fid value"]
    },
    id:{
        type: Number,
        required: [true, "Pls add id value"] 
    },
    nimi:{
        type: String
    },
    namn:{
        type: String
    },
    name:{
        type: String
    },
    osoite:{
        type: String
    },
    adress:{
        type: String
    },
    kaupunki:{
        type: String
    },
    stad:{
        type: String
    },
    operaattor:{
        type: String
    },
    kapasiteet:{
        type: Number
    },
    x:{
        type: String
    },
    y:{
        type: String 
    } ,
    total_journeys_starting:{
        type: Number
    } ,
    total_journeys_ending:{
        type: Number
    }  
}, {
    timepstamps: true,
    versionKey: false 
})

module.exports = mongoose.model('station', stationModel);