var http = require('http');
// Documentation: http://nodejs.org/api/http.html

// GET
var options = {
  host: 'httpbin.org',
  path: '/get?hello=world'
};

callback = function(response) {
  var str = '';

  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function(chunk) {
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  response.on('end', function() {
    console.log('GET response', str, typeof str);
  });
}

http.request(options, callback).end();

// POST

var options = {
  host: 'httpbin.org',
  path: '/post',
  //This is what changes the request to a POST request
  method: 'POST',
  // This isn't necessary for either request, just a demonstration that custom headers work
  headers: {'custom': 'Custom Header Demo works'}
};

callback = function(response) {
  var str = ''
  response.on('data', function(chunk) {
    str += chunk;
  });

  response.on('end', function() {
    console.log('POST response',str, typeof str);
  });
}

var req = http.request(options, callback);
//This is the data we are posting, it needs to be a string or a buffer
req.write("hello world!");
req.end();

