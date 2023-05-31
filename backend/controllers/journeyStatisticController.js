let {data, addData} = require('../tempData/data');
const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');

const JourneyStatistic = require('../models/journeyStatisticModel')


// @desc GET Station info
// @route GET/api/station
// @access Private
const getJourneyStatistic = asyncHandler(async (req, res) => {
        const station = await JourneyStatistic.find();
        console.log(station)    
        res.send(station)
})

// @desc get JourneyStatistic records by Month From Station
// @route POST/api/Station/:id
// @access Private
const getJourneyStatisticByMonthFromStation = asyncHandler(async (req, res) => {
    console.log(req.body)
    const station = await JourneyStatistic.find({date: req.body.date, Departure_station_id: req.body.Departure_station_id })
    res.status(200).json(station)
})

module.exports = {
    getJourneyStatistic,
    getJourneyStatisticByMonthFromStation
}