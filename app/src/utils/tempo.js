import { format, hourStart } from "@formkit/tempo"

const LENGUAGE_TIME = 'es'
const STRING_FORMAT = "YYYY-MM-DD"
const STRING_FORMAT_MAX_DATE_VALUE = "-12-31T00:00:00"
const STRING_FORMAT_DATETIME_NOW = "YYYY-MM-DDTHH:mm:ssZ"
const STRING_FORMAT_SIMPLE_DATE = "dddd, MMMM DD, YYYY"
const STRING_FORMAT_FULL_DATE = "dddd, MMMM D, YYYY h:mm A"
const STRING_FORMAT_TIME = "hh:mm A"

const LOCALITATION = "ve"
const date = new Date()

export const dateFormat = format(date, STRING_FORMAT , LENGUAGE_TIME)


export const minDateValue = dateFormat


export const maxDateValue = format(
	new Date(`${date.getFullYear()}${STRING_FORMAT_MAX_DATE_VALUE}`)
	, STRING_FORMAT, 
	LENGUAGE_TIME
)


export const getSimpleDate = (date) => {
	return format({
		date: date, 
		format: STRING_FORMAT_SIMPLE_DATE, 
		locale: LOCALITATION,
		genitive: true
	})
}

export const getFullDate = (date) => {
	const infoDate = date
	? date
	: new Date()

	return format({
		date: infoDate, 
		format: STRING_FORMAT_FULL_DATE, 
		locale: LOCALITATION,
		genitive: true
	})
}


export const getTime = (time) => {
	const date = new Date()
	const month = date.toISOString().split("-")[1]
	const formatDate = time 
		? `${date.getFullYear()}-${month}-${date.getDate()} ${time}`
		: new Date()
	return format({
		date: formatDate, 
		format: STRING_FORMAT_TIME, 
		locale: LOCALITATION,
	})
}

export const dateTimeNow = () => 
	format(new Date(), STRING_FORMAT_DATETIME_NOW , LENGUAGE_TIME)