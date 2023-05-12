const express = require('express');
const dotenv = require('dotenv').config();
const { connectDB } = require('./config/db');
const port = process.env.PORT ||4000;
connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/api/station', require('./routes/stationRoutes'))
app.use('/api/company', require('./routes/companyRouter'))
app.use('/api/journey', require('./routes/journeyRouter'))





app.listen(port, ()=> console.log(`Starting server on port ${port}`))