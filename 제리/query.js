const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'umc-mission7',
});

connection.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }

    const createTable = `create table if not exists test(
        id int primary key auto_increment,
        name varchar(10) not null,
        age int not null)`;

    connection.query(createTable, function (err, results, fields) {
        if (err) {
            console.error(err.message);
        }
    });

    connection.end(function (err) {
        if (err) {
            return console.log(err.message);
        }
    });
});
