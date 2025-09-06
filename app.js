const express = require('express');
const app = express();
const path = require('path'); //for frontend folder
const controlControllers = require('./controllers/control');
//const mongodb =require('./db/connect');
//connectDB();

app.use(express.static(path.join(__dirname, 'frontend'))); //for frontend folder

const routes = require('./routes/route');
app.use('/', routes);

app.listen(process.env.PORT || 3000, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});