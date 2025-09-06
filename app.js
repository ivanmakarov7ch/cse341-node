const express = require('express');
const app = express();
const path = require('path'); //for frontend folder

app.use(express.static(path.join(__dirname, 'frontend'))); //for frontend folder

app.get('/greeting', (req, res) => {
  res.send("Hello Ivan into Node.JS!");
});
 

//my test of implenet front end
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});


app.listen(process.env.PORT || 3000, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});