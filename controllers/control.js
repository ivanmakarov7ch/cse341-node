//const path = require('path'); // needed for path.join

const greeting = (req, res) => {
    res.send("Hello Ivan into Node.JS!");
};

const frontend = (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html')); 
};

module.exports = {
    greeting,
    frontend
};
