const express = require('express')
const { faker } = require('@faker-js/faker')

const {
  STATUS_OK,
  STATUS_CREATED,
  STATUS_BAD_REQUEST,
  STATUS_NOT_FOUND,
  STATUS_NOT_CONTENT,
  STATUS_FORBIDDEN

} = require('../../utils/status/index')
const {
	getAppointment,
	createAppointment, 
	deleteAppointment,
	getAllAppointments,
} = require('./commands/appointments/commands.js')

let appointments = require('./db/dbAppointments.js')

const router = express.Router()
router.use(express.json())



router.get('/appointment', async (request, response, next) => {
  response.status(STATUS_OK).json(getAllAppointments())
})


router.post('/appointment', async (request, response, next) => {

	const data = request.body
	
	const appointment = createAppointment({data})

  if(!appointment)
  	return response.status(STATUS_BAD_REQUEST).json({
			error: 'Error bad request',
			data: appointment
		})

  response.status(STATUS_CREATED).json(appointment)
})


router.get('/appointment/:id', async (request, response, next) => {
	const id = Number(request.params.id)

	console.log(id, "params id: ")
	const appointment =  getAppointment({id})
	
	if(!appointment)
		return response.status(STATUS_BAD_REQUEST).send("Something wrong")

	response.status(STATUS_OK).json(appointment)
})


router.delete('/appointment/:id', async (request, response, next) => {
	const id = Number(request.params.id)
	const appointment = deleteAppointment({id})

	if(!appointment)
		return response.status(STATUS_NOT_FOUND).json({
			error: 'Does not exist that element'
		})

	response.status(STATUS_NOT_CONTENT).send("ok")
})



module.exports = router
