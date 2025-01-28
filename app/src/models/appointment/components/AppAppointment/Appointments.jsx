import {useState} from "react"
import { useSelector, useDispatch } from 'react-redux'

// Style
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container'


import { useUserContext } from "@auth/hooks"
import {getSimpleDate, getTime} from "@root/utils"
import {deleteAppoiment} from "@root/reducers/appointments"
import {serviceDeleteAppointment} from "@appointment/services"
import {ListAppointment} from "./components/ListAppointment.jsx"


export const Appointments = ({handleNotiSuccess, handleMessageSuccess, handleNotiError, handleMessageError}) => {
	const dispatch = useDispatch()
	const { user } = useUserContext()
	const [show, setShow] = useState(false)
	const [showLoading, setShowLoading] = useState(false)
	const [detailAppointment, setDetailAppointment] = useState({})
	const appointments = useSelector(state => state.appointments)


  const handleClose = () => setShow(false)
  const handleShow = ({target: {dataset}}) => {
		setShow(true)
		const appointmentId = parseInt(dataset.appointmentId)

		const appointment = appointments.find(cita => cita.id === appointmentId)

		setDetailAppointment({...appointment})
  }


	const handlerDeleteAppointment = ({target}) => {
		//Desactivo el boton
		setShowLoading(true)
		handleClose()
		
		try{
				const appointmentId = parseInt(detailAppointment.id)			
				serviceDeleteAppointment({id: appointmentId})
				
				dispatch(deleteAppoiment({id: appointmentId}))
				
				handleNotiSuccess(true)
				handleMessageSuccess("La cita ha sido cancelada")
			}catch(error){
				handleNotiError(true)
				handleMessageError("Ocurrio un error al momento de cancelar la cita")
			}	finally {
				setShowLoading(false)
			}

	}
	


	return (<>
		<hr />
		{
			appointments.length === 0
			? <p className="mt-5 text-center">
					<em>Aún no tiene citas disponibles.</em>
				</p>
			:<div className="mt-5">
					<h1 
						className="display-6 text-center mb-5 border-bottom pb-3">Lista de citas</h1>
					<Container>
						<Row xs={1} sm={2} md={3} lg={4}>	

						{
							appointments.map(
								cita => 
								<Col key={cita.id}>
									<ListAppointment  cita={cita} handlerModal={handleShow}/>
								</Col>
							)
						}
						</Row>
					</Container>
				</div>
			}
      

      <Modal show={show} onHide={handleClose} keyboard={false} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>¡¡Cancelación!!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
        			<p>
        				<strong>¿{user.name}, quieres cancelarla?</strong>
        			</p>
						 	<p>
						 		Te recuerdo que esta cita está asignada a la siguiente fecha y horario: 
						 	</p>
						 	<Row>
				        <Col><em>{getSimpleDate(detailAppointment.date)}</em></Col>
				        <Col><em>{getTime(detailAppointment.time)}</em></Col>
				      </Row>
				      
        </Modal.Body>
        <Modal.Footer>
        	{
        		showLoading
						?<Button variant="success" type="button" disabled>
					        <Spinner
					          as="span"
					          animation="border"
					          role="status"
				          	size="sm"
					          aria-hidden="true"
					        />
					        <span className="visually-hidden">Loading...</span>
					      </Button>
						:<Button variant="outline-success" onClick={handlerDeleteAppointment}>
	            Confirmar
	          </Button>
        	}
	          
	          <Button variant="secondary" onClick={handleClose}>
	            Cancelar
	          </Button>
        </Modal.Footer>
      </Modal>						
	</>)
}