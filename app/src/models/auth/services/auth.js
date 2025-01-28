import axios from 'axios'


const STATUS_OK_CODE = 200

export const saveToken = ({token}) => {
	window.sessionStorage.setItem('token', token)
}

export const getToken = () => {
	window.sessionStorage.getItem('token')
}

export const deleteToken = () => {
	window.sessionStorage.removeItem('token')
}


export const serviceLogin = async ({email, password}) => {
	const url = "/apiv1/user/login"
	
	const {data, status} = await axios.post(url,
		{email, password},
	)

	if(status !== STATUS_OK_CODE)
		throw new Error(`Error en la petición: ${status}`)

	return data
}


export const serviceLogout = async () => {
	const url = "/apiv1/user/logout"
	
	const {data, status} = await axios.post(url)

	if(status !== STATUS_OK_CODE)
		throw new Error(`Error en la petición: ${status}`)

	return data
}