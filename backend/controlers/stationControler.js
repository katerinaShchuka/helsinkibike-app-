let {data, addData} = require("../tempData/data")
const asyncHandler = require('express-async-handler');

const Message = require('../models/messagesModel');

const getStations = asyncHandler(async (req, res) => {
        const messages = await Message.find();
        res.send(messages)
})

const getStationById = asyncHandler(async (req, res) => {
    let id = req.params.id
    //console.log(id)
    //res.send("id:"+id)
    res.send(data.find(el=>el._id == id)) 
} )

const getStationPegenation = asyncHandler(async (req, res) => {
    let start = req.params.start
    let perPage = req.params.perPage
    let end = start+perPage-1
    if( end>data.length) {
        end = data.length
    }
    res.send(data.slice(start, end))
})

const getStationDelete = asyncHandler( async (req, res) => {
    let id = req.params.id
    data = data.filter(el=>el._id!= id)
    res.send(data)
})

const putStation = asyncHandler( async (req, res) => {
    data.push(addData)
    res.send(data)
})

const postStation = asyncHandler (async (req, res) => {
    //console.log(req.body)
    if(!req.body.text){
        //res.status(400).json({message:"Text field is reqired"})
        res.status(400)
        throw new Error("Text field is reqired");
    }
    const messages = await Message.create({
        text: req.body.text
    })
    res.status(200).json(messages)
})

module.exports = {getStationPegenation, getStationById, getStations, getStationDelete, putStation, postStation }





