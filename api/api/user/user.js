const express = require('express')
const { faker } = require('@faker-js/faker');
const {
  STATUS_OK,
  STATUS_BAD_REQUEST,

} = require('../../utils/status/index')

const users = require('./db.js')

const router = express.Router()

router.use(express.json())

router.post('/user/login', async (request, response, next) => {

  const data = request.body
  if(!data.email || !data.password)
    return response.status(STATUS_BAD_REQUEST).json("Invalid credentials")

  const token = {token: faker.internet.jwt()}
  const [user] = users

  response.status(STATUS_OK).json({...user, ...token})
})

router.post('/user/logout', async (request, response, next)  => {
  response.status(STATUS_OK).json({message: "ok"})
})


module.exports = router

