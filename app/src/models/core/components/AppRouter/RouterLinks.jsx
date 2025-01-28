import {useState} from "react"
import {Link, useNavigate} from "react-router-dom"

//Style
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Navbar from 'react-bootstrap/Navbar'


import { RouterPath } from "@core/utils/RouterPath"
import { deleteToken, serviceLogout } from "@auth/services"
import {Notification} from "@root/utils/components/notifications"

export const RouterLinks = ({user, handlerUser}) => {
	const [showNotiError, setShowNotiError] = useState(false)
	const [loadingButton, setLoadingButton] = useState(false)

	const navigate = useNavigate()
	const handleErrorLogout = () => setShowNotiError(false)
	
	const handlerLogout = async (event) => {
		event.preventDefault()
		try{
			setLoadingButton(true)
			const response = await serviceLogout()
			deleteToken()
			handlerUser(null)
			navigate(RouterPath.public.login)
		}catch(error){
			setShowNotiError(true)
		} finally{
			setLoadingButton(false)
		}
	}


	return(<>
		<ul className="navbar-nav me-auto mb-2 mb-lg-0">
        	{
				user === null
				?<li className="nav-item">	 
					<Link 
						to={RouterPath.public.login} 
						className="nav link text-decoration-none">
							Login
					</Link>
				</li>
				: (<>
					<li className="nav-item">
		          		<Link 
		          			to={RouterPath.private.appointment} 
		          			className="nav link text-decoration-none">
							Agendar cita
						</Link>
					</li>				
				</>)
			}
	    </ul>
	    {
	      	user &&
	      	<div className="d-flex justify-content-end align-items-center">
	      		<Navbar.Text className="me-auto pe-2">
		      		Hola, <b>{user.name}</b>
		      	</Navbar.Text>
	      		<form onSubmit={handlerLogout} >
					{
					  	loadingButton
						?<Button 
							variant="outline-secondary" 
							type="button" 
							size="sm" 
							disabled 
							className="me-auto">
						        <Spinner
						          as="span"
						          animation="border"
						          size="sm"
						          role="status"
						          aria-hidden="true"
						        />
					        <span className="visually-hidden">Loading...</span>
				      	</Button>
						:<Button 
							type="submit" 
							variant="outline-secondary" 
							size="sm" 
							className="me-auto">
								Salir
						</Button>
					}
				</form>
		    </div>
	    }
	    

	    {	
			showNotiError
			?<Notification
				type="error"
				position="tc"
				showState={showNotiError} 
				handleState={handleErrorLogout}
				message="Ha ocurrido un error al momento de cerrar la sesión"
			/>
		    : '' 
		}
		
	</>)
}