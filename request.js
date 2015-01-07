var request = require('request');
// Documentation: https://github.com/request/request

// GET

request.get('http://httpbin.org/get?hello=world', function(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log('GET response', body, typeof body) // Show the HTML for the Google homepage.
  }
});

// POST
request.post({url:'http://httpbin.org/post',form: {hello:'world'}}, function(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log('POST response', body, typeof body) // Show the HTML for the Google homepage.
  }
});
