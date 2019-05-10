const express = require('express')
const path = require('path')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()

// Import Routes
const indexRoutes = require('./routes/index')

// Connect to MongoDB
mongoose.connect('mongodb://localhost/crud_mongo_done')
  .then(db => console.log('MongoDB Connected!'))
  .catch(err => console.log(err))

// Views Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/', indexRoutes)

const PORT = process.env.PORT || 3014
app.listen(PORT, () => console.log(`Server is starting on port ${PORT}`))