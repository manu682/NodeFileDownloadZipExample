var fs = require('fs');
const request = require('request');

/*
var contents = fs.readFileSync('input.zip');
console.log('Content : ', contents);
const base64Encoded = Buffer.from(contents).toString('base64');
console.log('base64Encoded : ', base64Encoded);
const decodedFile = Buffer.from(base64Encoded, 'base64');
fs.writeFileSync('output.zip', decodedFile);
*/

request('http://localhost:3000/downloadZip', (err, res, body) => {
  if (err) {
    return console.log(err);
  }
  fs.writeFileSync('output_raw.zip', body, 'binary');
  const base64Encoded = Buffer.from(body, 'binary').toString('base64');
  const decodedFile = Buffer.from(base64Encoded, 'base64');
  fs.writeFileSync('output_after_decode.zip', decodedFile, 'binary');
});
