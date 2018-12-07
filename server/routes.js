var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/messages', controller.messages.get);

router.post('/messages', controller.messages.post); 
//run the controller.messages.post function whenever we get an api request to /messages

router.get('/users', controller.users.get);

router.post('/users', controller.users.post);


module.exports = router;

