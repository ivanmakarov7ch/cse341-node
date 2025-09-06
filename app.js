const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes'); // <-- note: routes folder
const mongodb = require('./db/database');
const dotenv = require('dotenv');

dotenv.config();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'frontend')));

mongodb.initDb((err) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    // Use main routes
    app.use('/', routes);

    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
});
