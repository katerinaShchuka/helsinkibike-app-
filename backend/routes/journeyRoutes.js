
const express = require('express');
const router = express.Router();



const {getJourneysListWithSort, createJourney} = require("../controllers/journeyController")



router.post('/list/', getJourneysListWithSort);
router.post('/', createJourney);



module.exports = router