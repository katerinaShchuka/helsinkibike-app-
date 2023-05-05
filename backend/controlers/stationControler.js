let {data, addData} = require("../tempData/data")

const getStations = (req, res) => {
        res.send(data) }

const getStationById = (req, res) => {
    let id = req.params.id
    //console.log(id)
    //res.send("id:"+id)
    res.send(data.find(el=>el._id == id)) 
}

const getStationPegenation = (req, res) => {
    let start = req.params.start
    let perPage = req.params.perPage
    let end = start+perPage-1
    if( end>data.length) {
        end = data.length
    }
    res.send(data.slice(start, end))
}

const getStationDelete = (req, res) => {
    let id = req.params.id
    data = data.filter(el=>el._id!= id)
    res.send(data)
}

const putStation = (req, res) => {
    data.push(addData)
    res.send(data)
}



module.exports = {getStationPegenation, getStationById, getStations, getStationDelete, putStation }





