//Style
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Ratio from 'react-bootstrap/Ratio'
import Container from 'react-bootstrap/Container'

import { Link } from "react-router-dom"

import { RouterPath } from "@core/utils/RouterPath"
import hairLogo1 from "@root/assets/hairdresser.webp"


const inlineStyle = {
	"maxWidth": "100%"
}


export const Home = () => {
	return (
		<Container className="align-self-center mt-3">
			
			<div className="mx-auto" style={{maxWidth: "16em"}}>
				<Ratio >
					<Image style={inlineStyle} src={hairLogo1} roundedCircle/>
				</Ratio>
			</div>
			
			<Card className="p-3">
			  <Card.Body className="text-center">
			  	<Card.Text>
				  	Elige con quién agendar tu cita. 
			 	 </Card.Text>
			 	 <Card.Text>
			 	 	No esperes más, agenda ahora y vive
				  	la diferencia. ¡Te esperamos!
			 	 </Card.Text>

			  </Card.Body>
			</Card>
			<div className="text-center mt-3">
				<Link to={RouterPath.public.login}>Entrar</Link>
			</div>

		</Container>

	)
}