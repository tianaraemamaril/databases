var db = require('../db');
//modifies database

//db.query(queryString, param, callback)
//queryString -> sql syntax
//[req.body]
//callback(err, success)



module.exports = {
  messages: { 
  // fetch all messages
    get: function (callback) {
      db.query('SELECT * FROM messages \
        left outer join users on (messages.userId = users.id) \
        order by messages.id desc', (err, messages) => {
          if (err) {
            callback(err);
          } else {
            callback(null, messages);
          }
        });
    }, 
    //need to get 4 components id, text, roomname, username from messages, but users are in a different table and is related through user ID -> need to join table
    //use "left outer join" since it's a loose join
    //`SELECT messages.id, messages.roomname, messages.text, messages.userId FROM messages \
    // left outer join messages.userId = users.id \
    //order by messages.id desc`
    
    
    post: function (data, callback) {
      // create one message
      //since models/db.query takes a second param [], in controller get data in req.body in key/value pairs 
      // var param = [req.body.roomname, req.body[roomname], req.body[text], req.body[username]]
      
      console.log(data, "<<<<<<<<<<<<<<<DATA"); 
      // make a query to get id from the users table based on uesrname, pass userIds to 
      //first query's callback to be used as userIDs for INSERT
      // userId looks like this -> [ {id: 1 }] 
      db.query(`SELECT id FROM users where username = "${data.username}"`, (err, userIds) => {
        if (err) {
          callback(err);
          return;
        }
        
        db.query(`INSERT INTO messages (roomname, text, userId) VALUES ("${data.roomname}", "${data.message}",
          ${userIds[0].id})`, (err, success) => {
          if (err) {
            callback(err);
          } else {
            callback(null, 'SUCCESS!');
          }
        });
      });
    } 
  },
  
  // var queryString = `INSERT INTO messages (roomname, text, username) VALUES (?, [SELECT id from users where username = ? limit 1])`
  //
  

  users: {   
    // Ditto as above.
    //db.query takes a queryString sql syntax and callback
    get: function (callback) {
      db.query(`SELECT * FROM users;`, (err, data) => {
        if (err) {
          callback(err);
        } else {
          callback(null, data); //pass null in as first args when no err
        }
      });
    },
    
    //{username:xcxx}
    post: function (data, callback) {
      //can create var param to use for passing in as second args
      //first args can be var queryString = `INSERT INTO username (username) VALUES (?);`
      db.query(`INSERT INTO users (username) VALUES ("${data.username}");`, (err, success) => {
        if (err) {
          callback(err);
        } else {
          callback(null, 'SUCCESS!');
        }
      });
      
    }
  }
};



// module.exports = {
//   messages: {
//     get: function (callback) {
//       db.query('SELECT * FROM messages;', (err, success) => {

//         if (err) {
//           callback(err)
//         } else {
//           console.log(success, 'data from the model.messages')
//           callback(null, success)
//         }
//       })
//     }, // a function which produces all the messages
    
    
    
    
    
//     post: function (data, callback) {
//       // console.log( 'this is DATA FROM MODELS', data)
//       db.query(`INSERT INTO messages (username, text, roomname) VALUES ('${data.username}', "${data.message}", '${data.roomname}');`, (err, success) => {
//         if (err) {
//           callback(err);
//         } else {
//           callback(null, success);
//         }
//       })
      
      
//       // info.username
//       // info.message
//       // info.roomname
//       // db.query(`INSERT INTO tablename (roomname, text, username) VALUES (1,2,3)`)
//     } // a function which can be used to insert a message into the database
//   },

//   users: {   
//     // Ditto as above.
//     get: function (data, callback) {
//       db.query('SELECT * FROM username;', (err, success) => {
//         if (err) {
//           callback(err);
//         } else {
//           callback(null, success)
//         }
//       })
      
//     },
    
    
    
//     post: function (data, callback) {
//       // console.log(data, "this is data from models module")
//       db.query(`INSERT INTO username (username) VALUES ('${data.username}');`, (err, success) => {
//         // console.log(err, 'ERRRR USER', success, 'SUCCESSSS USER')
//         if (err) {
//           callback(err);
//       } else {
//         callback(null, success);
//       }
//     })
//     }
//   }
// }





/*


*/