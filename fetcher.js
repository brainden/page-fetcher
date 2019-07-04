let newArr = process.argv.slice(2);
let fs = require('fs');
let request = require('request');

request(newArr[0], function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  

    fs.writeFile(newArr[1], body, (err) => {
  
      if (err) throw err;
      console.log('file completed!')
    });
  

  

});