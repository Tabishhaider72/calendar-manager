const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

// Temporary in-memory "database" for events
let events = [];
let isAuthenticated = false;

app.post('/login', (req, res) => {
  const { name, email } = req.body;
  if (name && email) {
    isAuthenticated = true;
    return res.status(200).json({ success: true, message: 'Logged in successfully' });
  }
  res.status(400).json({ success: false, message: 'Invalid credentials' });
});

app.get('/events', (req, res) => {
  if (!isAuthenticated) return res.status(401).json({ message: 'Unauthorized' });
  res.json(events);
});

app.post('/events', (req, res) => {
  const { title, date, time, description } = req.body;
  const newEvent = { id: Date.now(), title, date, time, description };
  events.push(newEvent);
  res.status(201).json(newEvent);
});

app.put('/events/:id', (req, res) => {
  const { id } = req.params;
  const { title, date, time, description } = req.body;
  const event = events.find(event => event.id === parseInt(id));
  if (event) {
    Object.assign(event, { title, date, time, description });
    return res.json(event);
  }
  res.status(404).json({ message: 'Event not found' });
});

app.delete('/events/:id', (req, res) => {
  const { id } = req.params;
  events = events.filter(event => event.id !== parseInt(id));
  res.status(204).end();
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
