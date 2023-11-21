import mysql from 'mysql'; // mysql 모듈을 불러옵니다.

// 커넥션을 정의합니다.
// RDS Console 에서 본인이 설정한 값을 입력해주세요.
var connection = mysql.createConnection({
  host: "timo7-database.c8z9if4ndrhi.ap-northeast-2.rds.amazonaws.com",
  user: "root",
  password: "jiwoo8028",
  database: "test"
});

// RDS에 접속합니다.
connection.connect();
connection.query("SELECT * FROM umc",function(error, results, fields){
  if (error) throw error;
  console.log(results);
});
console.log(rows);