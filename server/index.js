const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

const eventsRoutes = require('./routes/events');
app.use('/events', eventsRoutes);

let isAuthenticated = false;

app.post('/login', (req, res) => {
  const { name, email } = req.body;
  if (name && email) {
    isAuthenticated = true;
    return res.status(200).json({ success: true, message: 'Logged in successfully' });
  }
  res.status(400).json({ success: false, message: 'Invalid credentials' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
