let {data, addData} = require("../tempData/data")
const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');

const Journey = require('../models/journeyModel');
const JourneyStatistic = require('../models/journeyStatisticModel');
const Station = require('../models/stationModel')

// @desc get Journey info
// @route POST/api/journey/list   body parameters: sort, skip, limit
// @access Private
const getJourneysListWithSort = asyncHandler(async (req, res) => {
        const limit = req.body.limit || 10
        const sort = req.body.sort || 'Duration'
        const skip = req.body.skip || 0
        const journey = await Journey.aggregate([
                    {$match: {}},
                    {$sort: {sort: -1 } },
                    {$skip: skip },
                    {$limit: limit }]
                    );  
        res.send(journey)
})

// @desc POST Journey info create Or Update
// @route POST/api/journey
// @access Private
const createJourney = asyncHandler(async (req, res) => {
    //   if(req.body.Departure && req.body.Return && req.body.Departure_station_id && req.body.Return_station_id && req.body.Departure_station_name && req.body.Return_station_name){
    //     res.status(400)
    //     throw new Error("Pls imput all params ");
    //  }
    //distance and duration validations
    if(req.body.Covered_distance < 10 || req.body.Duration < 10){
        res.status(400)
        throw new Error("Covered_distance or Duration less than 10 ");
     }

     const newJourney = {
            Departure: req.body.Departure,
            Return: req.body.Return,
            Departure_station_id: req.body.Departure_station_id,
            Departure_station_name: req.body.Departure_station_name,
            Return_station_id: req.body.Return_station_id,
            Return_station_name: req.body.Return_station_name,
            Covered_distance: req.body.Covered_distance,
            Duration: req.body.Duration,
        }
        const newvalues = { $set: newJourney };
        const options = { upsert: true };
        const journeys = await Journey.updateOne(newJourney, newvalues, options)

        //Add or update Record in JourneyStatistic

    const date = new Date(req.body.Return)
    const findStatistic = {
        date: (date.getMonth()+1) + "-" + date.getFullYear(),
        Departure_station_id: req.body.Departure_station_id,
        Return_station_id: req.body.Return_station_id, 
  }
    const statisticArr = await JourneyStatistic.find(findStatistic)
     
    let statistic = {
            total_distance_per_month: Number(statisticArr[0]?.total_distance_per_month|| 0) + Number(req.body.Covered_distance),
            total_journey_per_month: Number(statisticArr[0]?.total_journey_per_month || 0) + 1
        }
     const stat = await JourneyStatistic.updateOne(findStatistic, {$set: statistic}, options)

    // update the total number of return and departure from stations
    const notCreate  = { upsert: false };
    let StationDeparture = await Station.find({"fid": req.body.Departure_station_id});
    if(StationDeparture[0]?.fid){
            let total_journeys_starting = Number(StationDeparture[0].total_journeys_starting) + 1;
            StationDeparture =  await Station.updateOne({"fid": req.body.Departure_station_id}, {$set: {"total_journeys_starting":total_journeys_starting}}, options)
    } else {
        res.status(400)
        throw new Error("No Station with ID " + req.body.Departure_station_id)
    }
    let StationReturn = await Station.find({"fid": req.body.Return_station_id});
    if(StationReturn[0]?.fid){
            let total_journeys_ending = Number(StationReturn[0].total_journeys_ending) + 1;
            StationReturn =  await Station.updateOne({"fid": req.body.Return_station_id}, {$set: {"total_journeys_ending":total_journeys_ending}}, notCreate)
    }else{
        res.status(400)
        throw new Error("No Station with ID " + req.body.Return_station_id)
    }

    res.status(200).json(StationReturn)
})



module.exports = { getJourneysListWithSort, createJourney }





