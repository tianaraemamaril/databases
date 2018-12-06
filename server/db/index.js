var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "student" and password 'student'
// and to the database "chat".


var connection - mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  port: 3000,
  database: 'chat'
});

connection.connect(function(err) {
  if(err) {
    console.error('error connecting!');
    return
  }
  
  console.log('connected as id ' + connection.threadId)
})

