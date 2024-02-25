// GLOBAL VARIABLES & REQUIRES
const express = require('express');
const htmlRoutes = require('./routes/routes.js');
const apiRoutes = require('./routes/notes.js');

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static('public'));

// Use routes
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});