import {useState} from "react"

import {Appointments} from "./Appointments.jsx"
import {FormAppointment} from "@appointment/components/Form"
import {Notification} from "@root/utils/components/notifications"

export const AppAppointment =() => {
	const [messageError, setMessageError] = useState('')
	const [messageSuccess, setMessageSuccess] = useState('')
	const [showNotiError, setShowNotiError] = useState(false)
	const [showNotiSuccess, setShowNotiSuccess] = useState(false)


	const handleShowNotiError = () => setShowNotiError(false)
	const handleShowNotiSuccess = () => setShowNotiSuccess(false)
	

	return(<>
		<div className="mt-3">
			<h1 className="display-5 text-center mb-3">Agenda una cita</h1>
			
			<FormAppointment 
				handleNotiError={setShowNotiError}
				handleNotiSuccess={setShowNotiSuccess}
				handleMessageError={setMessageError}
				handleMessageSuccess={setMessageSuccess}
			/>

			<Appointments 
				handleNotiError={setShowNotiError}
				handleNotiSuccess={setShowNotiSuccess}
				handleMessageError={setMessageError}
				handleMessageSuccess={setMessageSuccess}
			/>

			{
				showNotiSuccess && (
					<Notification
						message={messageSuccess}
						position="tc"
						type="success"
						handleState={handleShowNotiSuccess}
						showState={showNotiSuccess}
					/>
				)
			}
			{
				showNotiError && (
					<Notification
						message={messageError}
						position="tc"
						type="error"
						handleState={handleShowNotiError}
						showState={showNotiError}
					/>
				)
			}
		</div>
	</>)
}