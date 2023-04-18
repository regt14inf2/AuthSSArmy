const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const dotenv = require("dotenv")
const user = require('./route/user')
const masterProgram = require('./route/masterProgram')
const masterUser = require('./route/masterUser')
const cors = require('cors')

dotenv.config()

app.use(cors())
app.use(bodyParser.json())

app.use('/authen', user)
app.use('/masterProgram', masterProgram)
app.use('/masteUser', masterUser)

app.listen(process.env.PORT, () => {
    console.log(`running at ${process.env.PORT}`)
})


