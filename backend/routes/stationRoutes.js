
const express = require('express');
const router = express.Router();

const {getStations, putStation, getStationById, getStationPegenation, getStationDelete} = require("../controlers/stationControler")

router.get('/', getStations)

router.get('/:id', getStationById)

router.get('/:start&:perPage', getStationPegenation)

router.delete('/:id', getStationDelete)

router.put('/', putStation )

module.exports = router

