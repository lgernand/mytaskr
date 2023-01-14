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
            task: "task1",
            estimatedTime: 5
        }, 
        {
            id: 1,
            task: "task2",
            estimatedTime: 6
        },
        {
            id: 2,
            task: "task3",
            estimatedTime: 3
        },
        {
            id: 3,
            task: "task4",
            estimatedTime: 7
        }
    ]

    console.log(todoList);

    res.json(todoList);
});


app.listen(port, function() {
    console.log('server spinning on port ' + port);
});