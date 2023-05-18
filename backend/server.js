const express = require('express');
const dotenv = require('dotenv').config();
const { connectDB } = require('./config/db');
const port = process.env.PORT ||4000;
//const {errorHandler} = require('./middleware/errorMiddleware');
connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))
//app.use(errorHandler)

app.use('/api/stations/',require('./routes/stationsRoutes'))
app.use('/api/journey/',require('./routes/journeyRoutes'))
app.use('/api/journeyStatistic/',require('./routes/journeyStatisticRoutes'))



app.listen(port, ()=> console.log(`Starting server on port ${port}`))