// Import the express module
const express = require('express');
// Create an instance of an Express application
const app = express();

// Root route that sends "Hello Holberton School!" as a response
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245);

// Export the app for testing purposes
module.exports = app;
