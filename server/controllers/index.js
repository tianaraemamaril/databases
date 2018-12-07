var models = require('../models');
//server requests
module.exports = {
  messages: {
    get: function (req, res) {
      // console.log(req, 'req.body FROM CONTROLLER')
      models.messages.get((err, success) => {
      if (err) {
        res.send(err);
      } else {
        res.send(success)
      }
    })
  }, // a function which handles a get request for all messages
    
    post: function (req, res) {
    // console.log('this is CONTROLLERS MESSAGES', req.body)

      models.messages.post(req.body, (err, success) => {
        if (err) {
          res.send(err);
        } else {
          res.send('your post was successful!');
        }
      })
    }
  },
      
      
      // console.log('helloooo MESSAGES', req.body)
      
      // res.send(models.messages.post(req.body));
      
       // a function which handles posting a message to the database
      //req object gets passed in. 
  
  /*
  
  
  
  */
  
  

  users: {
    // Ditto as above
    get: function (req, res) {
      // console.log(req.body, 'GET CONTROLERRRRRRRRRR')
      models.users.get(req.body, (err, success) => {
        if (err) {
          res.send(err)
        } else {
          res.send(success)
        }
      })
    },
    
    
    
    post: function (req, res) { 
      // console.log('this is CONTROLLERS USERS', req.body)
       models.users.post(req.body, (err, success) => {
        if (err) {
          res.send(err);
        } else {
          res.send('your post was successful!')  
        }
       });
    }
  }
}

