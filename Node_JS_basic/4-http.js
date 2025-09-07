// Import the http module
const http = require('http');

const port = 1245;

// Create the server
const app = http.createServer((req, res) => {
  // Set response header to plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Send the response
  res.end('Hello Holberton School!');
});

// Make the server listen on port 1245
app.listen(port);

// Export the app variable
module.exports = app;
