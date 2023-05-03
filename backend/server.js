const express = require('express');
const dotenv = require('dotenv');
const port = 4000;

const app = express();

app.get('/', (req, res) => {
    res.send("GET Request Called")
})

app.listen(port, ()=> console.log(`Starting server on port ${port}`))