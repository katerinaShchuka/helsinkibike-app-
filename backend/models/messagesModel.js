const mongoose = require('mongoose');

const messagesModel = mongoose.Schema({
    text:{
        type: String,
        required: [true, "Pls add text value"]
    },
}, {
    timepstamps: true,
})

module.exports = mongoose.model('messages', messagesModel);