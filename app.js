const express = require('express');
const app = express();
const path = require('path'); //for frontend folder
const controlControllers = require('./controllers/control');
//const mongodb =require('./db/connect');
//connectDB();

app.use(express.static(path.join(__dirname, 'frontend'))); //for frontend folder

// Routes
app.get('/', controlControllers.frontend);  
app.get('/greeting', controlControllers.greeting);
 
 

app.listen(process.env.PORT || 3000, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});