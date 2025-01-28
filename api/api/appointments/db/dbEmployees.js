const { Faker, es } = require('@faker-js/faker');

const customFaker = new Faker({ locale: [es] });


const MAX_NUMBER = 10000

module.exports = [
	{
        "id": 1, //customFaker.number.int(MAX_NUMBER),
        "name": customFaker.person.fullName(),
    },
    {
        "id": 2, //customFaker.number.int(MAX_NUMBER),
        "name": customFaker.person.fullName(),
    },
    {
        "id": 3, //customFaker.number.int(MAX_NUMBER),
        "name": customFaker.person.fullName(),
    },
    {
        "id": 4, //customFaker.number.int(MAX_NUMBER),
        "name": customFaker.person.fullName(),
    },
    {
        "id": 5, //customFaker.number.int(MAX_NUMBER),
        "name": customFaker.person.fullName(),
    },
]
