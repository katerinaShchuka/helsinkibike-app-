
const express = require('express');
const router = express.Router();



const {getJourneyStatistic, getJourneyStatisticByMonthFromStation} = require("../controllers/journeyStatisticController")



router.get('/', getJourneyStatistic);

router.post('/', getJourneyStatisticByMonthFromStation);


module.exports = router