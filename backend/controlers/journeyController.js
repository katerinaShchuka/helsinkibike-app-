let {data, addData} = require("../tempData/data")
const asyncHandler = require('express-async-handler');

const Journey = require('../models/journeyModel');

const getJourney = asyncHandler(async (req, res) => {
        const messages = await Journey.find();
        res.send(messages)
})

const getJourneyById = asyncHandler(async (req, res) => {
    let id = req.params.id
    //console.log(id)
    //res.send("id:"+id)
    res.send(data.find(el=>el._id == id)) 
} )

const getJourneyPegenation = asyncHandler(async (req, res) => {
    let start = req.params.start
    let perPage = req.params.perPage
    let end = start+perPage-1
    if( end>data.length) {
        end = data.length
    }
    res.send(data.slice(start, end))
})

const getJourneyDelete = asyncHandler( async (req, res) => {
    let id = req.params.id
    data = data.filter(el=>el._id!= id)
    res.send(data)
})

const putJourney = asyncHandler( async (req, res) => {
    data.push(addData)
    res.send(data)
})

// @desc POST Journey info
// @route POST/api/journey
// @access Private
const createJourney = asyncHandler(async (req, res) => {
    if(!req.body.name && !req.body.id_fin ){
        res.status(400)
        throw new Error("Name and id field are reqired");
    }
    const journey = await journey.create({
        id_fin: req.body.id_fin,
        name: req.body.name
    })
    res.status(200).json(journey)
})

module.exports = {getJourneyPegenation, getJourneyById, getJourney, getJourneyDelete, putJourney, createJourney }





