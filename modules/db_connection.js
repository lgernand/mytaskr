var secrets = require('./secrets')

var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: secrets.username,
  password: secrets.password
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});