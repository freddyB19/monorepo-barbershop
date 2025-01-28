
const allowlist = [
  "http://localhost:5173",
  "http://localhost:5174",

]


const corsOptionsDelegate = (req, callback) => {
  
  let corsOptions
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true }
  } else {
    corsOptions = { origin: false }
  }
  callback(null, corsOptions)
}

module.exports = corsOptionsDelegate