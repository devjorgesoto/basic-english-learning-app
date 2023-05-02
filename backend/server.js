console.log('Hello Backend')

const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000

const app = express()

// Read routes folder in backend folder.
app.use('/api/goals', require('./routes/goalRoutes'))

app.listen(PORT,() => console.log(`Server started on port ${PORT}`))
