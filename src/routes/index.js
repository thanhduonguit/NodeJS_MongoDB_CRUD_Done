const express = require('express')
const router = express.Router()

const Task = require('../models/task')

router.get('/', async (req, res) => {
  const task = await Task.find();
  res.render('index', {
    task
  })
})

// Add
router.post('/add', async (req, res, next) => {
  const task = new Task(req.body)
  await task.save()
  res.redirect('/')
})

// Status
router.get('/status/:id', async (req, res, next) => {
  let { id } = req.params
  const task = await Task.findById(id)
  task.status = !task.status
  await task.save()
  res.redirect('/')
})

// Edit
router.get('/edit/:id', async (req, res, next) => {
  let { id } = req.params
  const task = await Task.findById(id)
  res.render('edit', { task })
})

router.post('/edit/:id', async (req, res, next) => {
  const { id } = req.params
  await Task.update({ _id: id }, req.body)
  res.redirect('/')
})

// Delete
router.get('/delete/:id', async (req, res, next) => {
  let { id } = req.params
  await Task.remove({ _id: id })
  res.redirect('/')
})

module.exports = router