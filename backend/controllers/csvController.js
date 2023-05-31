const fs = require("fs");
const path = require("path");
const csv = require("fast-csv");
const stationsController = require("./stationController.js");
const journeyController = require("./journeyController.js");

exports.create = async (req, res) => {
  console.log(req.file);
  try {
    console.log(
      path.join(__dirname,"../","/public/csv/" + req.file.filename)
    );
    fs.createReadStream(
      path.join(__dirname,"../","/public/csv/" + req.file.filename)
    )
      .pipe(csv.parse({ headers: true })) //, delimiter: '\t'
      .on("error", (error) => console.error(error))
      .on("data", async (rowCount) => {
        await stationsController.createOrUpdateStation(rowCount);
      })
      .on("end", function () {
        res.json("stations are updated");
      });
  } catch (error) {
    res.status(400).json(error);
  }
};



exports.createJourney = async (req, res) => {
  console.log(req.file);
  try {
    console.log(
      path.join(__dirname,"../","/public/csv/" + req.file.filename)
    );
    fs.createReadStream(
      path.join(__dirname,"../","/public/csv/" + req.file.filename)
    )
      .pipe(csv.parse({ headers: true })) //, delimiter: '\t'
      .on("error", (error) => console.error(error))
      .on("data", async (rowCount) => {
        await journeyController.createJourney(rowCount);
      })
      .on("end", function () {
        res.json("journies are updated");
      });
  } catch (error) {
    res.status(400).json(error);
  }
};