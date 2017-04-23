const express = require('express');
const bodyParser = require('body-parser');

const PORT = 1337;
const IP = '127.0.0.1';
const app = express();


// serve static assets
app.use('/client', express.static(__dirname + '/client'));


//serve index.html on GET /
app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/client/index.html');
});


app.listen(PORT, () => {
  console.log(`wardrobe watch is listening on port ${PORT}`);
});