    
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = Schema({
  title: String,
  description: String,
  status: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('tasks', taskSchema)   // tasks: Mongo Collections