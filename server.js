const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'front-end', 'build')))

const port = 80;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'front-end', 'build', 'index.html'))
});

app.listen(port, function() {
    console.log('server spinning on port ' + port);
});