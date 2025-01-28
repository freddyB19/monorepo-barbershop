import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'


import { useUserContext } from "@auth/hooks"


export const ModalCustom = ({showModal, handleModal, handleSubmit, showLoading}) => {
	const { user } = useUserContext()

	const handleClickSubmit = ({target}) => {
		target.setAttribute("disabled", true)

		/*setTimeout(() => handleSubmit(), 4000)*/
		handleSubmit()
	}

	
	return (
		<Modal show={showModal} onHide={handleModal}  keyboard={false} backdrop="static">
			<Modal.Header closeButton>
			<Modal.Title>¡¡Nueva cita!!</Modal.Title>
			</Modal.Header>
			<Modal.Body>
					<b>{user.name}</b>, por favor confirma que quieres crear esta cita
			</Modal.Body>
			<Modal.Footer>
				<Button variant="outline-secondary" onClick={handleModal}>
				Cancelar
				</Button>
				<form>					
					{
						showLoading
						?<Button variant="success" type="button" disabled>
					        <Spinner
					          as="span"
					          animation="border"
					          role="status"
					          aria-hidden="true"
					        />
					        <span className="visually-hidden">Loading...</span>
					      </Button>
						:<Button type="button" onClick={handleClickSubmit} variant="success">
							Confirmar
						</Button>
					}
					
				</form>
				
			</Modal.Footer>
		</Modal>
	)
}	