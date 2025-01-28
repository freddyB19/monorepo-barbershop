// Style
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

import {getSimpleDate, getTime} from "@root/utils"
import { Link } from "react-router-dom"
export const ListAppointment = ({cita, handlerModal}) => {

	return (<>
		<Card key={cita.id} 
			border="success" 
			className="mb-3 w-100 shadow"
		>
			<Card.Header>Nueva cita</Card.Header>
			<Card.Body>
			  <Card.Text className="text-center">
			  	<small>Fecha de la reservación:</small>
			  </Card.Text>
			   <Card.Text className="text-center">
			   		<small>	
			   			<em className="fw-bolder">{getSimpleDate(cita.date)}</em>
			   		</small>
			   </Card.Text>
			   <Card.Text className="text-center">
			   		<small>	
			   			<em className="fw-bolder">{getTime(cita.time)}</em>	
			   		</small>
			   </Card.Text>
				<div className="d-flex justify-content-between mb-3">
					<Link to={`/appointment/${cita.id}`} className="btn btn-outline-primary btn-sm">Ver más</Link>
					<Button
						variant="outline-danger"
						size="sm" 
						data-appointment-id={cita.id} 
						onClick={handlerModal}>
							Cancelar
					</Button>
				</div>
			</Card.Body>
		</Card>
	</>)
}