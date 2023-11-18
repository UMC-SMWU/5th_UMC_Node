const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '0000',
  database : 'mysql'
});

connection.connect();

connection.query('SELECT * from Users', (error, rows, fields) => {
  if (error) throw error;
  console.log('User info is: ', rows);
});

connection.end();