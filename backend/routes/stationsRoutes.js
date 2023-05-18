
const express = require('express');
const router = express.Router();

const {getStation, getStationByIdFin, createOrUpdateStation, getStationListWithSort} = require("../controllers/stationController")



router.get('/', getStation);

router.post('/create/', createOrUpdateStation);

router.get('/:fid', getStationByIdFin)

router.post('/', getStationListWithSort)

module.exports = router

