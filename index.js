const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const dotenv = require("dotenv")
const user = require('./route/user')
const cors = require('cors')
dotenv.config()

app.use(cors())
app.use(bodyParser.json())

app.use('/authen', user)

app.listen(process.env.PORT, () => {
    console.log(`running at ${process.env.PORT}`)
})
