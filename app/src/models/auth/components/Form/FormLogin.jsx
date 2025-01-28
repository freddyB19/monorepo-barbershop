import {useState} from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

//Style
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

import { useUserContext } from "@auth/hooks"
import { RouterPath } from "@core/utils/RouterPath"
import { serviceLogin, saveToken } from "@auth/services"
import {EmailField, PasswordField} from "./fieldsForm.jsx"
import {Notification} from "@root/utils/components/notifications"


export const FormLogin = () => {
	const navigate = useNavigate()
	const { setUser } = useUserContext()
	const [showError, setShowError] = useState(false)
	const [loadingButton, setLoadingButton] = useState(false)

	
	const {
		register,
    	handleSubmit,
    	reset,
    	formState: { errors },
	} = useForm()

	const handleErrorLogin = () => setShowError(false)

	const onSubmit =  async ({email, password}) => {

		try{

			setLoadingButton(true)
			const user = await serviceLogin({email, password})
			setUser({
				id: user.id,
				name: user.name,
				lastName: user.lastName,
				email: user.email,
			})
			saveToken({token: user.token})
			reset()
			navigate(RouterPath.private.appointment)
		}catch(error) {
			console.log(error)
			setShowError(true)
			setLoadingButton(false)
		}

		
	}


	return(<>
		{	
			showError
			?<Notification
				type="error"
				position="tc"
				showState={showError} 
				handleState={handleErrorLogin}
				message="Ha ocurrido un error en el momento de iniciar sesión"
			/>
		    : '' 
		}
		
		<Form onSubmit={handleSubmit(onSubmit)} className="needs-validation" noValidate>
			
			<EmailField errors={errors} register={register}/>
			<PasswordField errors={errors} register={register}/>

			<div className="mx-center text-center">
				{	
					loadingButton
					?<Button variant="secondary w-75" type="button" size="lg" disabled>
				        <Spinner
				          as="span"
				          animation="border"
				          size="sm"
				          role="status"
				          aria-hidden="true"
				        />
				        <span className="visually-hidden">Loading...</span>
				      </Button>
				      : <Button type="submit" size="lg" className="text-center w-75">
						Entrar
					</Button>
				}
			</div>
		</Form>
	</>)
}