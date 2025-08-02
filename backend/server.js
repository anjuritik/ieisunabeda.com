const express = require('express');
const cors = require('cors');
const db = require('./db'); // Import the database connection

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const membersRoutes = require('./members');
app.use(membersRoutes);

const academicsRoutes = require('./academics');
app.use(academicsRoutes);

// Example route to interact with the database
app.get('/api/members', (req, res) => {
  db.query('SELECT * FROM members', (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database query failed', error: err });
    }
    res.json(results);
  });
});

// Optional base route
app.get('/', (req, res) => {
  res.send('API is running 🚀');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
