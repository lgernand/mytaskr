const express = require('express');
const path = require('path');
const db = require('./modules/db_connection');

const app = express();

app.use(express.static(path.join(__dirname, 'front-end', 'build')))

const port = 3000;

app.get('/', function(req, res) {
    //let posts = db.getAllPosts();
    //console.log(posts);

    
    res.sendFile(path.join(__dirname, 'front-end', 'build', 'index.html'))
});

app.get("/posts", (req, res) => {
    const todoList = [
        {
            id: 0,
            task: "write a todo app as a fullstack node/react ap",
            estimatedTime: "TBD"
        },
        {
            id: 1,
            task: "figure out what database to use: postgresql or mongoDB?",
            estimatedTime: "hopefully not too long"
        },
        {
            id: 2,
            task: "litter box",
            estimatedTime: "5 minutes"
        },
        {
            id: 3,
            task: "get the css looking nice on here",
            estimatedTime: "this will never be finishedasdasfd"
        }
    ];
    res.json(todoList);
});


app.listen(port, function() {
    console.log('server spinning on port ' + port);
});