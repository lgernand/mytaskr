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

app.get("/posts",async (req, res) => {
    
        //{
        //    id: 0,
        //    task: "task1",
        //   estimatedTime: 5
        //}

    var todoList = [];

    var posts = await db.getAllPosts();

    for (var i = 0; i < posts.length; ++i)
    {
        todoList.push({ id: posts[i].TaskID, task: posts[i].Task, estimatedTime: posts[i].ETA})
    }

    res.json(todoList);
});


app.listen(port, function() {
    console.log('server spinning on port ' + port);
});