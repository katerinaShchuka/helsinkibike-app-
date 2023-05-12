let {data, addData} = require("../tempData/data")
const asyncHandler = require('express-async-handler');

const Company = require('../models/companyModel');

const getCompanies = asyncHandler(async (req, res) => {
        const messages = await Company.find();
        res.send(messages)
})

const getCompanyById = asyncHandler(async (req, res) => {
    let id = req.params.id
    //console.log(id)
    //res.send("id:"+id)
    res.send(data.find(el=>el._id == id)) 
} )

const getCompanyPegenation = asyncHandler(async (req, res) => {
    let start = req.params.start
    let perPage = req.params.perPage
    let end = start+perPage-1
    if( end>data.length) {
        end = data.length
    }
    res.send(data.slice(start, end))
})

const getCompanyDelete = asyncHandler( async (req, res) => {
    let id = req.params.id
    data = data.filter(el=>el._id!= id)
    res.send(data)
})

const putCompany = asyncHandler( async (req, res) => {
    data.push(addData)
    res.send(data)
})

// @desc POST Company info
// @route POST/api/company
// @access Private
const createCompany = asyncHandler(async (req, res) => {
    if(!req.body.name && !req.body.id_fin ){
        res.status(400)
        throw new Error("Name field is reqired");
    }
    const company = await Company.create({
        id_fin: req.body.id_fin,
        name: req.body.name
    })
    res.status(200).json(company)
})

module.exports = {getCompanyPegenation, getCompanyById, getCompanies, getCompanyDelete, putCompany, createCompany }





