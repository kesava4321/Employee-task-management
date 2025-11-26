const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const { Employee, Task } = require('../models');

// Create employee
router.post('/', [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required')
], async (req, res) => {
  const errors = validationResult(req); if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  try {
    const emp = await Employee.create(req.body);
    res.status(201).json(emp);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all employees (with tasks)
router.get('/', async (req, res) => {
  const emps = await Employee.findAll({ include: [{ model: Task, as: 'tasks' }] });
  res.json(emps);
});

// Get one employee
router.get('/:id', async (req, res) => {
  const emp = await Employee.findByPk(req.params.id, { include: ['tasks'] });
  if (!emp) return res.status(404).json({ error: 'Employee not found' });
  res.json(emp);
});

// Update
router.put('/:id', async (req, res) => {
  const emp = await Employee.findByPk(req.params.id);
  if (!emp) return res.status(404).json({ error: 'Employee not found' });
  try {
    await emp.update(req.body);
    res.json(emp);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  const emp = await Employee.findByPk(req.params.id);
  if (!emp) return res.status(404).json({ error: 'Employee not found' });
  await emp.destroy();
  res.json({ message: 'Deleted' });
});

module.exports = router;
