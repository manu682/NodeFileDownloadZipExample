const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/downloadZip', function(req, res) {
  var file = path.resolve(__dirname, 'input.zip');
  res.download(file); // Set disposition and send it.
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
