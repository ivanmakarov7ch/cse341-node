const express = require('express');
const path = require('path');
const routes = require('./routes');
const mongodb = require('./db/database');

const app = express();
const port = process.env.PORT || 8080;


app.use(express.static(path.join(__dirname, 'frontend')));
app.use('/', routes);

// Initialize MongoDB and then start server
mongodb.initDb((err) => {
  if (err) {
    console.error('Failed to connect to MongoDB. Server not started.');
  } else {
    app.listen(port, () => {
      console.log(`🚀 Server running on port ${port} with MongoDB connected`);
    });
  }
});
