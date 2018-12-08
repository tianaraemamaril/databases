/* You'll need to have MySQL running and your Node server running
 * for these tests to pass. */

var mysql = require('mysql');
var request = require('request'); // You might need to npm install the request module!
var expect = require('chai').expect;

describe('Persistent Node Chat Server', function() {
  var dbConnection;

  beforeEach(function(done) {
    dbConnection = mysql.createConnection({
      user: 'student',
      password: 'student',
      database: 'chat'
    });
    dbConnection.connect();

    var tablename = "messages"; //############## WE CHANGED THIS TO MESSAGES. --> how do we dynamically test all tablenames?

    /* Empty the db table before each test so that multiple tests
     * (or repeated runs of the tests) won't screw each other up: */
    dbConnection.query('truncate ' + tablename, done);
  });

  afterEach(function() {
    dbConnection.end();
  });

  it('Should insert posted messages to the DB', function(done) {
    // Post the user to the chat server.
    request({
      method: 'POST',
      uri: 'http://127.0.0.1:3000/classes/users',
      json: { username: 'Valjean' }
    }, function (data) {
      console.log("POST USER DATA!!!!", data);
      // Post a message to the node chat server:
      request({
        method: 'POST',
        uri: 'http://127.0.0.1:3000/classes/messages',
        json: {
          username: 'Valjean',
          message: 'In mercy\'s name, three days is all I need.',
          roomname: 'Hello'
        }
      }, function () {
        console.log('This bit works, too!!');
        // Now if we look in the database, we should find the
        // posted message there.

        // TODO: You might have to change this test to get all the data from
        // your message table, since this is schema-dependent.
        var queryString = 'SELECT * FROM messages';
        var queryArgs = [];

        dbConnection.query(queryString, function(err, results) {
          // Should have one result:
          expect(results.length).to.equal(1);
          //result should be 1
          //result.length should equal to 1
          //result is result of running select allf rom messages table
          //

          // TODO: If you don't have a column named text, change this test.
          expect(results[0].text).to.equal('In mercy\'s name, three days is all I need.');

          done();
        });
      });
    });
  });

  it('Should output all messages from the DB', function(done) {
    // Let's insert a message into the db
    var queryString = "INSERT INTO messages (userId, text, roomname) VALUES (1, 'Men like you can never change!', 'main');";

    // var queryString = "INSERT INTO messages (username, text, roomname) VALUES ('bob', 'Men like you can never change!', 'main');";
    var queryArgs = [];
    // TODO - The exact query string and query args to use
    // here depend on the schema you design, so I'll leave
    // them up to you. */

    dbConnection.query(queryString, queryArgs, function(err) {
      if (err) { throw err; }

      // Now query the Node chat server and see if it returns
      // the message we just inserted:
      request('http://127.0.0.1:3000/classes/messages', function(error, response, body) {
        // console.log(body, 'BODY FROM TEST')
        
        var messageLog = JSON.parse(body);
        console.log('>>>>>>>>>>>>>>>>', messageLog, "MESSASGELOGGGG");
        expect(messageLog[0].text).to.equal('Men like you can never change!');
        expect(messageLog[0].roomname).to.equal('main');
        done();
      });
    });
  });
  
  
  it('Should save multiple rows from a given table', function(done) {
    
    var queryArgs = [
      [1, 'Do not forget your database!', '3rd Floor'],
    
      [2, 'Get a good amount of sleep!', 'Galvanize Room']
    ];
    
    //changed username to userId
    dbConnection.query("INSERT INTO messages (userId, text, roomname) VALUES ?", [queryArgs], function(err) {
      if (err) {
        throw err;
      }
      
      request('http://127.0.0.1:3000/classes/messages', function(error, response, body) {
        var messageLog = JSON.parse(body);
        expect(messageLog.length).to.equal(2);
        done();
      });
    });
    
    
    
    
    
    // request ('http://127.0.0.1:3000/classes/messages', function(error, response, body) {
      
    //   var messageArray = JSON.parse(body);
    //   expect(messageArray)
    // })
  });
  
});












