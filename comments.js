// Create Web Server
// Create a new express.js web server
// Create a new route for GET requests to /comments
// Inside the route, send back the value of the global comments variable
// Start the server on port 3001
// Use the correct route to send back the comments array
// Use the correct method to start the server

// comments.js
const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
  res.send(comments);
});

app.listen(3001);
