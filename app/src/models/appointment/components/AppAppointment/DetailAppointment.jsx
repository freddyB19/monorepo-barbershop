import { Link } from "react-router-dom"

// Style
import Card from 'react-bootstrap/Card'
import Placeholder from 'react-bootstrap/Placeholder'


import {
	getSimpleDate,
	getTime
} from "@root/utils"
import { RouterPath } from "@core/utils/RouterPath"
import { useUserContext } from "@auth/hooks"

import {
  serviceGetAppointment
} from "@appointment/services"

import {useAppointment} from "@appointment/hooks"
import {Notification} from "@root/utils/components/notifications"


export const DetailAppointment = ({appointment}) => {
	const { user } = useUserContext()

	
	const {loading, error, setError, data} = useAppointment({
		fetch: serviceGetAppointment,
		params: {
			id: appointment.id
		}
	})

	return (<>
		<div className="mt-3">
			
		
			<h1 className="display-4 text-center mb-5">Detalle de la cita</h1>
			
			{
				error && 
				<Notification
					type="error"
					position="tc"
					message="No se pudo obtener la información de esta cita"
					showState={error}
				/>
			}

			{
				!loading && !error 
				
				? <>
					<p className="mb-3">
						{user &&(<b>{user.name}</b>)}, esta es la información de tu cita. 
					</p>
					<table className="table table-hover mb-3 text-center">
					  <thead className="table-dark">
					    <tr>
					      <th scope="col">Fecha</th>
					      <th scope="col">Horario</th>
					      <th scope="col">Agendada con</th>
					      <th scope="col">Tipo de servicio</th>
					      <th scope="col">Precio</th>
					    </tr>
					  </thead>
					  <tbody>
					    <tr>
					      <th scope="row">
					      	{	
					      		data.date
					      		? getSimpleDate(data.date)
					      		: <span className="text-danger"><b>Fecha</b> no registrada.</span>
					      	}
					      </th>
					      <td>
					      		{
					      			data.time
					      			? getTime(data.time)
					      			: <span className="text-danger"><b>Horario</b> no registado.</span>
					      		}
					      	</td>
					      <td>{data.employee.name}</td>
					      <td>{data.service.type}</td>
					      <td>${data.service.price}</td>
					    </tr>
					  </tbody>
					</table>
					<div className="text-center mt-5">
						<Link
							to={RouterPath.private.appointment}
							className="btn btn-outline-primary btn-sm"
							>
								Regresar
						</Link>
					</div>
				</>
				: <div>
					<Placeholder as={Card.Text} animation="glow">
						<Placeholder xs={12} />
						<Placeholder xs={12} />
						<Placeholder xs={12} />
						<Placeholder xs={12} />
						<Placeholder xs={12} />
					</Placeholder>
					
					<div className="text-center mt-5">			
						<Placeholder.Button  xs={2} size="sm" aria-hidden="true" />
					</div>
				</div>
			}
		
	</div>
	</>)
}