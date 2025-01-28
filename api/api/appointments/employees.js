const express = require('express')
const employees = require('./db/dbEmployees.js')
const {
  STATUS_OK,
  STATUS_BAD_REQUEST
} = require('../../utils/status/index')


const router = express.Router()

router.use(express.json())

router.get('/employee', async (request, response, next) => {
	response.status(STATUS_OK).json(employees)
})

router.get('/employee/:id', async (request, response, next) => {
	const id = Number(request.params.id)

	const employee = employees.find(data => data.id === id)

	if(!employee)
		return response.status(STATUS_BAD_REQUEST).json({
			error: 'Does not exist that element'
		})
	response.status(STATUS_OK).json(employee)
})


module.exports = router