let { data, addData } = require("../tempData/data");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

const Journey = require("../models/journeyModel");
const JourneyStatistic = require("../models/journeyStatisticModel");
const Station = require("../models/stationModel");

// @desc get Journey info
// @route POST/api/journey/list   body parameters: sort, skip, limit
// @access Private
const getJourneysListWithSort = asyncHandler(async (req, res) => {
  const limit = req.body.limit || 10;
  const sort = req.body.sort || "Duration";
  const skip = req.body.skip || 0;
  const sortOrder = req.body.sortOrder || 0;
  const count = await Journey.countDocuments();
  const journey = await Journey.aggregate([
    { $match: {} },
    { $sort: { [sort]: sortOrder } },
    { $skip: skip },
    { $limit: limit },
  ]);
  console.log(journey);
  res.send({ count, journey });
});

// @desc POST Journey info create Or Update
// @route POST/api/journey
// @access Private

// @desc POST Journey info create Or Update
// @route POST/api/journey
// @access Private
const createJourney = async (data) => {

  //distance and duration validations
  if (parseInt(data.Covered_distance) < 10 || parseInt(data.Duration) < 10) {
    //res.status(400)
    throw new Error("Covered_distance or Duration less than 10 ");
  }

  const newJourney = {
    Departure: data.Departure,
    Return: data.Return,
    Departure_station_id: parseInt(data.Departure_station_id),
    Departure_station_name: data.Departure_station_name,
    Return_station_id: parseInt(data.Return_station_id),
    Return_station_name: data.Return_station_name,
    Covered_distance: parseInt(data.Covered_distance),
    Duration: parseInt(data.Duration),
  };

  //check if the departute stations and retuen stations are in StationList if not found the journeywould not count
  let StationDeparture = await Station.find({
    fid: newJourney.Departure_station_id,
  });
  if (!StationDeparture[0].fid) {
    //res.status(400)
    throw new Error("No Station with ID " + newJourney.Departure_station_id);
  }
  let StationReturn = await Station.find({
    fid: newJourney.Return_station_id,
  });
  if (!StationReturn[0].fid) {
    // res.status(400)
    throw new Error("No Station with ID " + newJourney.Return_station_id);
  }

  const newvalues = { $set: newJourney };
  const options = { upsert: true };
  const journeys = await Journey.updateOne(newJourney, newvalues, options);
  console.log(journeys);
  //Add or update Record in JourneyStatistic

  const date = new Date(req.Return);
  const findStatistic = {
    date: date.getMonth() + 1 + "-" + date.getFullYear(),
    Departure_station_id: newJourney.Departure_station_id,
    Return_station_id: newJourney.Return_station_id,
  };
  const statisticArr = await JourneyStatistic.find(findStatistic);

  let statistic = {
    total_distance_per_month:
      Number(statisticArr[0]?.total_distance_per_month || 0) +
      Number(req.Covered_distance),
    total_journey_per_month:
      Number(statisticArr[0]?.total_journey_per_month || 0) + 1,
  };
  const stat = await JourneyStatistic.updateOne(
    findStatistic,
    { $set: statistic },
    options
  );

  // update the total number of return and departure  in stations reconrds
  const notCreate = { upsert: false };
  const total_journeys_starting =
    Number(StationDeparture[0].total_journeys_starting) + 1;
  StationDeparture = await Station.updateOne(
    { fid: newJourney.Departure_station_id },
    { $set: { total_journeys_starting: total_journeys_starting } },
    options
  );

  const total_journeys_ending =
    Number(StationReturn[0].total_journeys_ending) + 1;
  StationReturn = await Station.updateOne(
    { fid: newJourney.Return_station_id },
    { $set: { total_journeys_ending: total_journeys_ending } },
    notCreate
  );

  //res.status(200).json(StationReturn)
};

module.exports = {
  getJourneysListWithSort,
  createJourney,
};
