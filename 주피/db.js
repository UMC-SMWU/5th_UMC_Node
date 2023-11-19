require('dotenv').config();

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : process.env.DB_PASSWORD,
  database : 'umc_mission7'
});

connection.connect();

connection.query('SELECT * from USER', function (error, results, fields) {
  if (error) throw error;
  console.log('users: ', results);
});

connection.end();
