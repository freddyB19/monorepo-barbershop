import {useState} from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"

//Style
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

import {getToken } from "@auth/services"
import { useAppointment } from "@appointment/hooks"
import {ModalCustom } from "@appointment/components/Modal"
import { Notification } from "@root/utils/components/notifications"

import {
	DateField, 
	TimeField,
	SelectField,
	TypeServiceField
} from "./fieldsForm.jsx"

import {
	serviceAddAppointment,
	serviceGetInfoBarberShop
} from "@appointment/services"

import {
	addAppoiment, 
	deleteLastAppoiment
} from "@root/reducers/appointments"



export const FormAppointment = ({handleNotiSuccess, handleMessageSuccess, handleNotiError, handleMessageError}) => {
	const [showModal, setShowModal] = useState(false)
	const [showLoading, setShowLoading] = useState(false)
	const [validButton, setValidButton] = useState(false)
	
	const [servicePrice, setServicePrice] = useState('')
	const dispatch = useDispatch()
	
	const {
		data,
		error,
		loading, 
		setError
	} = useAppointment({
		fetch: serviceGetInfoBarberShop
	}) 
	
	const {
    	reset,
		register,
    	handleSubmit,
    	formState: { isValidating, errors },
	} = useForm()


	const handleShowModal = () => setShowModal(true)
	const handleCloseModal = () => setShowModal(false)


	const onSubmit = async ({employee, date, time, service}) => {
		const token = getToken()
		setShowLoading(true)
		handleCloseModal()
		
		try{
			
			const appointment = await serviceAddAppointment({token, employee, date, time, service})
		
			dispatch(addAppoiment(appointment))
			
			reset()
			setServicePrice('')
			handleNotiSuccess(true)
			handleMessageSuccess("Cita creada de manera exitosa")
		
		} catch(error){
			console.error(error)
			dispatch(deleteLastAppoiment())
			handleNotiError(true)
			handleMessageError("Ocurrio un error al momento de crear la cita")
			
		} finally {
			setShowLoading(false)
		}

	}


	const onError = ({employee, date, time, service}) => {
		// Este método no hace "nada"
		// pero, como necesitamos que solo se muestre un "Modal"
		// cuando el formulario sea valido, éste método
		// nos ayuda a que se cumpla este proceso.
		// (Se ejecuta cuando el formulario es invalido)
		// para mayor referencia revisar la documentación
		// de react-hook-form
	}

	return(<>
		<Form 
			className="p-2 mb-3"
			onSubmit={handleSubmit(handleShowModal, onError)}>
			<TypeServiceField 
				errors={errors}
				loading={loading} 
				register={register} 
				servicePrice={servicePrice}
				handleServicePrice={setServicePrice}
				options={data.services? data.services: []}
			/>
			<SelectField 
				errors={errors}
				loading={loading}
				register={register} 
				options={data.employees? data.employees: []}
			/>
			<DateField register={register} errors={errors} />
			<TimeField register={register} errors={errors} />
			 <div className="d-grid gap-2">
			 	{
			 		loading
			 		? <Button variant="secondary" type="button" size="lg" disabled>
				        <Spinner
				          as="span"
				          animation="border"
				          size="sm"
				          role="status"
				          aria-hidden="true"
				        />
				        <span className="visually-hidden">Loading...</span>
				      </Button>
			 		:
		 			<Button
		 				disabled={!data.hasOwnProperty("services") ? true : false}
		 				type="submit" 
		 				size="lg"
		 				>Crear
		 			</Button>
			 	}
			</div>
		</Form>

		<ModalCustom
			showModal={showModal}
			showLoading={showLoading}
			handleModal={handleCloseModal}
			handleSubmit={handleSubmit(onSubmit)}
		/>
		{
			error &&
			<Notification
				type="error"
				position="tc"
				message="Ha ocurrido un error al cargar los datos,
					intento luego"
				showState={error}
				handleState={() => setError(null)}

			/>
		}
		
	</>)
}