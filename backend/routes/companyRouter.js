const express = require('express');
const router = express.Router();

const {getCompanies, putCompany, getCompanyById, getCompanyPegenation, getCompanyDelete, createCompany} = require("../controlers/companyControler")

router.get('/', getCompanies)

router.get('/:id', getCompanyById)

router.get('/:start&:perPage', getCompanyPegenation)

router.delete('/:id', getCompanyDelete)

router.put('/', putCompany )

router.post('/', createCompany)

module.exports = router