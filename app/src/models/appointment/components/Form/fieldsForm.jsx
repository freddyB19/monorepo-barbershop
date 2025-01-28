import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
//Style
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'


import {
	dateFormat as defaultDate, 
	minDateValue as minDate, 
	maxDateValue as maxDate
} from "@root/utils"


const isValidateSelectField = (data) => {
		return data !== ""
}

const FeedBackError = ({message}) => {
	return (
		<p className="text-danger fw-bold mb-5"> {message} </p>
	)
}


export const TimeField = ({register, errors}) => {
	const minTime = "09:00"
	const maxTime = "18:00"

	return (
		<Form.Group className="mb-3">
			<Form.Label htmlFor="time">Elige una hora para tu cita</Form.Label>
			<Form.Control  
				id="time" 
				type="time"
				className={
        		errors.time
        		?'form-control is-invalid'
        		: 'form-control'
	        	}
				aria-invalid={errors.time ? "true" : "false"}
				minle={minTime}
				pattern="[0-9]"
				max={maxTime}
				{...register("time", {min: minTime, max: maxTime, required: true})}
			 />
			 {errors.time && errors.time.type === "required" && (
			 	<FeedBackError message="Asigne una hora para su cita" />
			 )}
			 {errors.time && errors.time.type === "min" && (
			 	<FeedBackError message="La hora no puede ser menor a las 9 am" />
			 )}
			 {errors.time && errors.time.type === "max" && (
			 	<FeedBackError message="La hora no puede ser mayor a las 6 pm" />
			 )}
		</Form.Group>
	)
}

export const DateField = ({register, errors, defaultDateProp = false}) => {
	const defaultValueDate = !defaultDateProp ? defaultDate : defaultDateProp

	return (
		<Form.Group className="mb-3">
			<Form.Label htmlFor="date">Elige una fecha para tu cita</Form.Label>

			<Form.Control  
				id="date" 
				type="date"
				aria-invalid={errors?.date ? "true" : "false"}
				min={minDate}
				max={maxDate}
				defaultValue={defaultValueDate}
				{...register("date", {min: minDate, max: maxDate, required: true})}
			 />
			 {errors.date && (
			 	<FeedBackError message="Debe elejir una fecha para su cita" />
			 )}
		</Form.Group>

	)
}


export const TypeServiceField = ({register, errors, loading, options, servicePrice, handleServicePrice}) => {
	
	const handlerChooseService = ({nativeEvent: {target}}) => {
		const id = parseInt(target.value)
		const service = options.find(option => option.id === id)
		handleServicePrice(service.price)
	}

	return(
	<Form.Group className="mb-3">
		<Form.Label htmlFor="service">Tipo de servicio</Form.Label>
		<InputGroup className="mb-3">
		<InputGroup.Text>$</InputGroup.Text>
		<Form.Control
	        type="text"
	        placeholder="Precio del servicio"
	        value={servicePrice}
	        disabled
	        readOnly
	      />

		<Form.Select
			id="service" 
			{...register("service", {
				required: true, 
				value: "", 
				validate: isValidateSelectField,
				onChange: handlerChooseService
			})}
			className={
        		errors.service
        		?'form-control is-invalid'
        		: 'form-control'
        	}
		>	
			<option value="" disabled>Selecciona el tipo de servicio</option>
			{
				!loading
				?options.map(option =>
					<option 
						key={option.id} 
						value={option.id}>
							{option.type}
					</option>
				)
				: <option disabled>Cargando...</option>
			}
		</Form.Select>
		</InputGroup>

		{errors.service && (
			<FeedBackError message="Este campo es requerido" />
		)}

	</Form.Group>
	)
}

export const SelectField = ({register, errors, loading, options}) => {

	return (
		<Form.Group className="mb-3">
			<Form.Label htmlFor="employee">Elige con quién agendar tu cita</Form.Label>
			<Form.Select 
				id="employee" 
				{...register("employee", {
					required: true,
					value: "", 
					validate: isValidateSelectField,
					onChange: (data) => null

				})}
				className={
	        		errors.employee
	        		?'form-control is-invalid'
	        		: 'form-control'
	        	}
			>
				<option value="" disabled>Selecciona a alguien para tu cita</option>
				{
					!loading
					?options.map(option =>
						<option key={option.id} value={option.id}>{option.name}</option>
					)
					: <option disabled>Cargando...</option>
				}
				
			</Form.Select>
			{errors.employee && (
				<FeedBackError message="Este campo es requerido" />
			)}
		</Form.Group>
	)
}
