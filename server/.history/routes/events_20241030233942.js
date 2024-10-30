const express = require('express');
const router = express.Router();

let events = [];
let isAuthenticated = true; 

// Middleware to check authentication
router.use((req, res, next) => {
  if (!isAuthenticated) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  next();
});

// Get all events
router.get('/', (req, res) => {
  res.json(events);
});

// Create a new event
router.post('/', (req, res) => {
  const { title, date, time, description } = req.body;
  const newEvent = { id: Date.now(), title, date, time, description };
  events.push(newEvent);
  res.status(201).json(newEvent);
});

// Update an existing event
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, date, time, description } = req.body;
  const event = events.find(event => event.id === parseInt(id));
  if (event) {
    Object.assign(event, { title, date, time, description });
    return res.json(event);
  }
  res.status(404).json({ message: 'Event not found' });
});

// Delete an event
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  events = events.filter(event => event.id !== parseInt(id));
  res.status(204).end();
});

module.exports = router;
