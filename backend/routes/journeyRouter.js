const express = require('express');
const router = express.Router();

const {getJourney, putJourney, getJourneyById, getJourneyPegenation, getJourneyDelete, createJourney} = require("../controlers/journeyController")

router.get('/', getJourney)

router.get('/:id', getJourneyById)

router.get('/:start&:perPage', getJourneyPegenation)

router.delete('/:id', getJourneyDelete)

router.put('/', putJourney )

router.post('/', createJourney)

module.exports = router