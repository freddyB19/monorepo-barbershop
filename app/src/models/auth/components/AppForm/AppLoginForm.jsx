import Container from 'react-bootstrap/Container'

import {FormLogin} from "@auth/components/Form"


export const AppLoginForm = () => {
	return(<>
		<Container className="align-self-center mt-4 bg-body-tertiary rounded p-3">
			<div className="w-100 m-auto" style={{padding: "1rem", "maxWidth": "530px"}}>
				<h1 className="display-4 text-center mb-2">Login</h1>
				<FormLogin />
			</div>
			
		</Container>
	</>)
}