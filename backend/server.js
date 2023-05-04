console.log('hello backend server.js')

const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()
const colors = require('colors')

const PORT = process.env.PORT || 5000
const connectDB = require ('./config/db')

connectDB ()
const app = express()

// parse application/x-www-form-urlencoded && parse application/json
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.urlencoded({extended:false}))

// reads routes folder in backend folder && note: app.use() is a middleware
app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.listen(PORT,() => console.log(`Server started on port ${PORT}`))
