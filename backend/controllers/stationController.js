let { data, addData } = require("../tempData/data");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

const Station = require("../models/stationModel");

// @desc GET Station info
// @route GET/api/station
// @access Private
const getStation = asyncHandler(async (req, res) => {
  const station = await Station.find();
  console.log(station);
  res.send(station);
});

// @desc get Journey info
// @route POST/api/journey/list   body parameters: sort, skip, limit
// @access Private
const getStationListWithSort = asyncHandler(async (req, res) => {
  const limit = req.body.limit || 10;
  const sort = req.body.sort || "Name";
  const skip = req.body.skip || 0;
  const sortOrder = req.body.sortOrder || 0;
  const count = await Station.countDocuments();
  const stations = await Station.aggregate([
    { $match: {} },
    { $sort: {[sort]: sortOrder} },
    { $skip: skip },
    { $limit: limit },
  ]);
  res.send({count,stations});
});

// @desc POST Station info create Or Update
// @route POST/api/station
// @access Private
const createOrUpdateStation = async (data) => {
  if (!data.FID && !data.ID) throw new Error("FID, ID fields are reqired");
  const newStation = {
    fid: data.FID,
    id: data.ID,
    nimi: data.Nimi,
    namn: data.Namn,
    name: data.Name,
    osoite: data.Osoite,
    adress: data.Adress,
    kaupunki: data.Kaupunki,
    stad: data.Stad,
    operaattor: data.Operaattor,
    kapasiteet: data.Kapasiteet,
    x: data.x,
    y: data.y,
    total_journeys_starting: 0,
    total_journeys_ending: 0,
  };
  const myquery = { fid: data.FID };
  const newvalues = { $set: newStation };
  const options = {upsert: true, new: true};
  await Station.findOneAndUpdate(myquery, newvalues, options);
};

// @desc GEt Station record by Id
// @route GET/api/Station/:id
// @access Private
const getStationByIdFID = asyncHandler(async (req, res) => {
  console.log(req.params);
  const station = await Station.find({ fid: req.params.fid });
  res.status(200).json(station);
});

module.exports = {
  getStation,
  createOrUpdateStation,
  getStationByIdFID,
  getStationListWithSort,
};
