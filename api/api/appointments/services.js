const express = require('express')
const services = require('./db/dbServices.js')


const {
  STATUS_OK,
  STATUS_BAD_REQUEST
} = require('../../utils/status/index')

const router = express.Router()
router.use(express.json())


router.get('/service', async (request, response, next) => {
	response.status(STATUS_OK).json(services)
})

router.get('/service/:id', async (request, response, next) => {
	const id = Number(request.params.id)

	const service = services.find(data => data.id === id)

	if(!service)
		return response.status(STATUS_BAD_REQUEST).json({
			error: 'Does not exist that element'
		})
	response.status(STATUS_OK).json(service)
})

module.exports = router
