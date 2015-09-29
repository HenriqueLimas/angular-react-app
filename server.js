'use strict';

let fs = require('fs');
let path = require('path');

let bodyParser = require('body-parser');
let express = require('express');
let app = express();

app.use('/', express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/jedis', (req, res) => {
  fs.readFile('jedis.json', (err, data) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});

let server = app.listen(3000, () => {
  let host = server.address().address;
  let port = server.address().port;

  console.log('Server listening at http://%s:%s', host, port);
});