const { Faker, es } = require('@faker-js/faker');

const customFaker = new Faker({ locale: [es] });

const MAX_NUMBER = 10000
const firstName = customFaker.person.firstName()
const lastName = customFaker.person.lastName()

module.exports = [
	{
		"id": customFaker.number.int(MAX_NUMBER),
		"name": firstName,
		"lastName": lastName, 
		"email": customFaker.internet.email({firstName}),
	}
]