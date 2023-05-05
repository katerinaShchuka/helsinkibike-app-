const express = require('express');
const dotenv = require('dotenv');
const port = process.env.PORT ||4000;

const app = express();

app.use('/api/station', require('./routes/stationRoutes'))


app.listen(port, ()=> console.log(`Starting server on port ${port}`))