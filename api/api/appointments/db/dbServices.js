const { faker } = require('@faker-js/faker')
const MAX_NUMBER = 10000

module.exports = [
	{
		"id": 1, //faker.number.int(MAX_NUMBER),
		"type": "Corte de cabello",
		"price": "20.00"
	},
	{
		"id": 2, //faker.number.int(MAX_NUMBER),
		"type": "Manicura",
		"price": "15.00"
	},
	{
		"id": 3, //faker.number.int(MAX_NUMBER),
		"type": "Pedicura",
		"price": "17.00"
	}
]