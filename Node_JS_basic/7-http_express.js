// Import express module
const express = require('express');

// Get command line arguments (database file path)
const args = process.argv.slice(2);
const countStudents = require('./3-read_file_async');

// Set database file path from arguments
const DATABASE = args[0];

// Create an Express application
const app = express();

// Define root route
app.get('/', (request, response) => {
  response.set('Content-Type', 'text/plain');
  response.send('Hello Holberton School!');
});

// Define /students route
app.get('/students', async (request, response) => {
  response.set('Content-Type', 'text/plain');
  const msg = 'This is the list of our students\n';
  try {
    // Call countStudents and await its result
    const students = await countStudents(DATABASE);
    response.send(`${msg}${students}`);
  } catch (error) {
    // If error, send error message
    response.send(`${msg}${error.message}`);
  }
});

// Start the server on port 1245
app.listen(1245);

module.exports = app;
