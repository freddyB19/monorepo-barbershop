
import {
  Route, 
  Link, 
  Navigate, 
  useMatch,
} from "react-router-dom"
import { useSelector } from "react-redux"

//Style
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'


import { useUserContext } from "@auth/hooks"
import {
	AppAppointment,
	DetailAppointment,
} from "@appointment/components/AppAppointment"


import { Home } from "@core/components/Home" 
import { RouterLinks } from "./RouterLinks.jsx"
import { RouterPath } from "@core/utils/RouterPath"
import { AppLoginForm } from "@auth/components/AppForm"
import { RoutesWithNotFound } from "@core/components/RoutesWithNotFound"


export const AppRouter = () => {
	const matchPath = useMatch(RouterPath.private.appointmentDetail)
	const { user, setUser } = useUserContext()


	const appointments = useSelector(
		state => 
			state.appointments
	)


	const appointment = matchPath
		? appointments.find(
				appointment => appointment.id === Number(matchPath.params.id)
			)
		: null

	return(<>
		<Navbar expand="lg" className="bg-body border-bottom border-dark-subtle ">
      <Container>
      	<Navbar.Brand>
	      	<Link to={RouterPath.public.home} className="text-uppercase nav-link active">
						inicio
					</Link>
				</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        	<RouterLinks user={user} handlerUser={setUser} />
        </Navbar.Collapse>
      </Container>
    </Navbar>


		<RoutesWithNotFound>
			<Route path={RouterPath.public.home} element={<Home />}/>
			<Route path={RouterPath.public.login} element={<AppLoginForm />}/>
			
			<Route 
				path={RouterPath.private.appointment}  
				element={
					user !== null 
						? <AppAppointment /> 
						: <Navigate to={RouterPath.public.home} />
					}
			/>
			<Route 
				path={RouterPath.private.appointmentDetail} 
				element={
					appointment
						? <DetailAppointment appointment={appointment}/> 
						: <Navigate to={RouterPath.public.error} />
				}
			/>

		</RoutesWithNotFound>
	</>)
}