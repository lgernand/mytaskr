var secrets = require('./secrets')

var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: secrets.username,
  password: secrets.password,
  database: "taskr_db" 
});

var posts

const setPosts = (rows) => {
  posts = rows;
} 

exports.getAllPosts = function() {
  return new Promise(function (resolve, reject) {
    con.connect(function(err) {
      if (err) throw err;
      con.query("SELECT * FROM tasks order by PostedDateTime desc", function (err, result, fields) {
        if (err) throw err;
        resolve(result);
      });
    });
  })   
}

exports.postNewTask = function(task, estimatedTime) {
  return new Promise(function (resolve, reject) {
    con.connect(function(err) {
      if (err) throw err;
      con.query("INSERT INTO tasks (UserID, Task, ETA, Completed, CompletedDateTime) VALUES ( 1, '" + task + "', " + estimatedTime + ", 0, null)", function (err, result, fields) {
        if (err) throw err;
        resolve(result);
      });
    });
  });
}