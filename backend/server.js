console.log('Hello Backend')

const express = require('express')

const dotenv = require('dotenv').config()
const colors = require('colors')
const bodyParser = require('body-parser')

const connectDB = require ('./config/db')
const PORT = process.env.PORT || 5000

connectDB ()
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// read routes folder in backend folder.
// app.use is a middleware.
app.use('/api/goals', require('./routes/goalRoutes'))

app.use(express.urlencoded({extended:false}))

app.listen(PORT,() => console.log(`Server started on port ${PORT}`))
