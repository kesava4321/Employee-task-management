const express = require('express');
const router = express.Router();
const { Task, Employee } = require('../models');

// Create task
router.post('/', async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all tasks (with assigned employee)
router.get('/', async (req, res) => {
  const tasks = await Task.findAll({ include: [{ model: Employee, as: 'employee' }] });
  res.json(tasks);
});

// Get task
router.get('/:id', async (req, res) => {
  const task = await Task.findByPk(req.params.id, { include: ['employee'] });
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
});

// Update task
router.put('/:id', async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  try {
    await task.update(req.body);
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  await task.destroy();
  res.json({ message: 'Deleted' });
});

module.exports = router;
