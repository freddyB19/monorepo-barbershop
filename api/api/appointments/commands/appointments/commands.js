const { faker } = require('@faker-js/faker')
const services = require('../../db/dbServices.js')
const employees = require('../../db/dbEmployees.js')
let appointments = require('../../db/dbAppointments.js')

const MAX_NUMBER = 10000


const createAppointment = ({data}) =>{
	if(!data.employee || !data.service)
		return null

	const employee = employees.find(employee => employee.id === parseInt(data.employee))
	const service = services.find(service => service.id === parseInt(data.service))


	if (!employee || !service)
		return null

	const newAppointment = {
		id: faker.number.int(MAX_NUMBER),
		date: data.date,
		time: data.time,
		service: service.id,
		employee: employee.id
	}

	appointments.push(newAppointment)

	return newAppointment
}



const deleteAppointment = ({id}) => {

	if(!appointments.some(appointment => appointment.id === parseInt(id)))
		return null
	const newAppointments = appointments.filter(appointment => appointment.id !== id)
	appointments = [...newAppointments]
	return true
}

const getAppointment = ({id}) => {
	
	if(!appointments.some(appointment => appointment.id === id))
		return null
	
	const appointment = appointments.find(
		appointment => appointment.id === parseInt(id)
	)

	const employee = employees.find(
		employee => employee.id === parseInt(appointment.employee)
	)
	const service = services.find(
		service => service.id === parseInt(appointment.service)
	)

	if (!employee || !service)
		return null

	const detail = {
		...appointment,
		service,
		employee,
	}

	return detail
}

const getAllAppointments = () => {
	return appointments.length !== 0 ? appointments : []
}

module.exports = {
	getAppointment,
	createAppointment,
	deleteAppointment,
	getAllAppointments
}