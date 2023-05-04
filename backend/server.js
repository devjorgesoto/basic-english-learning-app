console.log('Hello Backend')

const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const connectDB = require ('./config/db')
const PORT = process.env.PORT || 5000

connectDB ()
const app = express()

// read routes folder in backend folder.
// app.use is a middleware.
app.use('/api/goals', require('./routes/goalRoutes'))

app.use(express.urlencoded({extended:false}))

app.listen(PORT,() => console.log(`Server started on port ${PORT}`))
