var unirest = require('unirest');
// Documentation: http://unirest.io/nodejs.html

// GET

unirest.get('http://httpbin.org/get?hello=world')
  .headers({
    'Accept': 'application/json',
    'Custom-Header':'totes works'
  })
  .end(function (response) {
    if(response.error){
      console.log('ERROR',response.error);
    }
    console.log('GET response',response.body, typeof response.body);
  });

// POST

unirest.post('http://httpbin.org/post')
  .headers({
    'Accept': 'application/json',
    'Custom-Header':'totes works'
  })
  .send({"hello":"world"})
  .end(function (response) {
    if(response.error){
      console.log('ERROR',response.error);
    }
    console.log('POST response',response.body, typeof response.body);
  });

