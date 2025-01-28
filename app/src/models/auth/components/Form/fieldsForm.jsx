import Form from 'react-bootstrap/Form'


export const EmailField = ({register, errors}) => {
	return (

		<Form.Group className="mb-3">
	        <Form.Label htmlFor="email">Correo</Form.Label>
	        <Form.Control 
	        	type="email"
	        	id="email"

	        	{...register("email", {
	        		required: true,
	        		pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
	        	})}
	        	aria-invalid={errors.email? 'true' : 'false'}
	        	className={
	        		errors.email
	        		?'form-control is-invalid'
	        		: 'form-control'
	        	}
	        />
			{
				errors.email && errors.email.type === "required" &&(
				<p className="text-danger">
					Este campo es requerido
				</p>
				)
			}
			{
				errors.email && errors.email.type === "pattern" &&(
				<p className="text-danger">
					Ingrese un email valido
				</p>
				)
			}
		</Form.Group>

	)
}

export const PasswordField = ({register, errors}) => {
	return (
		<Form.Group className="mb-3">
			<Form.Label htmlFor="password">Contraseña</Form.Label>
			<Form.Control 
				type="password"
				id="password"
				{...register("password", {required: true, minLength: 4, maxLength: 20})}
				aria-invalid={errors.password? 'true' : 'false'}
				className={
	        		errors.password
	        		?'form-control is-invalid'
	        		: 'form-control'
	        	}
			/>
			{errors.password && errors.password.type === "required" && (
				<div className="text-danger">
					Este campo es requerido.
				</div>
			)}
			{errors.password && errors.password.type === "minLength" && (
				<div className="text-danger">
					La contraseña debe ser mayor a cuatro caracteres.
				</div>
			)}
			{errors.password && errors.password.type === "maxLength" && (
				<div className="text-danger">
					Su contraseña no debe ser mayor a 20 caracteres.
				</div>
			)}
			{!errors.password && (
				<Form.Text id="passwordHelpBlock" muted>
	        		Su contraseña debe tener entre 4 y 20 caracteres,
	      		</Form.Text>
			)}
		</Form.Group>
	)
}