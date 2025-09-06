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


//Not fake
mongodb.initDb((err) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    // Use main routes
    app.use('/', routes);

    //for server
    app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

    //for local
    /*app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });*/
});



/*
// ---------- Safe MongoDB init for FAKE start up
mongodb.initDb((err) => {
    if (err) {
        console.warn('⚠️ MongoDB not connected. Running without database.');
    } else {
        console.log('✅ MongoDB connected successfully.');
    }

    // Use routes after DB attempt
    app.use('/', routes);

    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
});
*/



