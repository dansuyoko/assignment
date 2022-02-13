var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'petstore',
  port: 3306,
});

module.exports = conn;
