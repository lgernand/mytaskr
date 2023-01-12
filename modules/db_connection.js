var secrets = require('./secrets')

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: secrets.username,
  password: secrets.password
});

function getAllPosts() {
  con.connect(function(err) {
    if (err) throw err;
      con.query("SELECT * FROM taskr_db.tasks", function (err, result, fields) {
    if (err) throw err;
    return result;
    });
  });
}