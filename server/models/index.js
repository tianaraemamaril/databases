var db = require('../db');
//modifies database
module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (data, callback) {
      console.log(data, 'this is DATA FROM MODELS')
      db.query(`INSERT INTO messages (username, text, roomname) VALUES ('${data.username}', "${data.message}", '${data.roomname}')`, (err, success) => {
        if (err) {
          callback(err);
        } else {
          callback(null, success);
        }
      })
      
      
      // info.username
      // info.message
      // info.roomname
      // db.query(`INSERT INTO tablename (roomname, text, username) VALUES (1,2,3)`)
    } // a function which can be used to insert a message into the database
  },

  users: {   
    // Ditto as above.
    get: function () {},
    
    
    
    post: function (data, callback) {
      // console.log(data, "this is data from models module")
      db.query(`INSERT INTO username (username) VALUES ('${data.username}')`, (err, success) => {
        if (err) {
          callback(err);
      } else {
        callback(null, success);
      }
    })
    }
  }
}





/*
info body object comming from controllers looks like:
{
  username:
  message:
  roomname:
  
}

*/