const express = require('express')
const corsSettings = require("./utils/cors/index")
const {requestLogger} = require("./utils/middlewares/index")
const cors = require("cors")

const app = express()


app.use(requestLogger)
app.use(cors(corsSettings))
app.use(express.static("../app/dist"))



//Routes
const user = require("./api/user/user")
const services = require("./api/appointments/services")
const employees = require("./api/appointments/employees")
const appointments = require("./api/appointments/appointments")
const barbershop = require("./api/appointments/servicesAndEmployees")


app.use("/apiv1", user)
app.use("/apiv1", services)
app.use("/apiv1", employees)
app.use("/apiv1", appointments)
app.use("/apiv1", barbershop)


app.set('user', user)
app.set('services', services)
app.set('employees', employees)
app.set('appointments', appointments)
app.set('barbershop', barbershop)


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.dir(`Local: http://localhost:${PORT}/`)

})