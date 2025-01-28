import axios from 'axios'

const STATUS_OK_CODE = 200
const STATUS_CREATED = 201
const STATUS_NOT_CONTENT = 204

const headers = {'Content-Type': 'application/json'}

export const serviceGetInfoBarberShop = async ({signal}) => {
  const url = `/apiv1/barbershop`

  const {data, status} = await axios.get(url, {headers}, {signal})


  if(status !== STATUS_OK_CODE)
    throw new Error(`Error en la petición (${url}): ${status}`)

  return data
}


export const serviceAddAppointment = async ({token, employee, date, time, service}) => {
  const url = "/apiv1/appointment" 
  const {data, status} = await axios.post(url,
    {employee, date, time, service},
    {headers}
  )



   if(status !== STATUS_CREATED)
    throw new Error(`Error en la petición (${url}): ${status}`)

  return data
}


export const serviceDeleteAppointment = async ({id}) => {
  const url = `/apiv1/appointment/${id}`

  const {status} = await axios.delete(url,
    {headers}
  )

   if(status !== STATUS_NOT_CONTENT)
    throw new Error(`Error en la petición (${url}): ${status}`)
  
}

export const serviceGetAllAppointments = async () => {
  const url = "/apiv1/appointment"

  const {data, status} = await axios.get(url,
    {headers}
  )

   if(status !== STATUS_OK_CODE)
    throw new Error(`Error en la petición (${url}): ${status}`)

  return data 
  
}

export const serviceGetAppointment = async ({id}) => {
  const url = `/apiv1/appointment/${id}` 
  const {data, status} = await axios.get(url, 
    {headers}
  )

  if(status !== STATUS_OK_CODE)
    throw new Error(`Error en la petición (${url}): ${status}`)

  return data
}
