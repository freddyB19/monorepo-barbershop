const express = require('express')
const services = require('./db/dbServices.js')
const employees = require('./db/dbEmployees.js')

const {STATUS_OK} = require('../../utils/status/index')

const router = express.Router()
router.use(express.json())


router.get('/barbershop', async (request, response, next) => {
	const barbershop = {services, employees}
	response.status(STATUS_OK).json(barbershop)
})


module.exports = router
