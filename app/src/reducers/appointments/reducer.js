
const STATE_INIT = "@init"
const STATE_ADD = "@add_appointment"
const STATE_DELETE = "@delete_appointment"
const STATE_DELETE_LAST = "@delete_last_appointment"



export const appointmentReducer = (state = [], action) => {
	switch(action.type){
	case STATE_INIT:
		return [...action.paylod]
	case STATE_ADD:
		return state.concat(action.paylod)
	case STATE_DELETE:
		return state.filter(appointment => appointment.id !== action.paylod.id)
	case STATE_DELETE_LAST:
		const idLastAppointment = state[state.length - 1]
		return state.filter(appointment => appointment.id !== idLastAppointment.id)
	default:
		return state
	}
}


export const addAppoiment = ({id, employee, date, time, service}) => {

	return {	
		type: STATE_ADD,
		paylod:{
			id: id,
			employee: employee,
			date: date,
			time: time,
			service: service,
		}
	}
}

export const deleteAppoiment = ({id}) => {

	return {
		type: STATE_DELETE,
		paylod: {id: parseInt(id) }
	}
}


export const deleteLastAppoiment = () => {
	return {
		type: STATE_DELETE_LAST
	}
} 