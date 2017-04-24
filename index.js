const express = require('express');
const bodyParser = require('body-parser');

const logger = require('./middleware/logger');
const Items = require('./middleware/itemHandlers');

const PORT = 1337;
const IP = '127.0.0.1';
const app = express();

// use logger middleware
app.use(logger);

app.use(bodyParser.json());

// serve static assets
app.use('/client', express.static(__dirname + '/client'));


app.route('/items')
  .get(Items.getAll)
  .post(Items.addOne);


app.get('/items/:id', Items.getOneByID);

//serve index.html on GET /
app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/client/index.html');
});


app.listen(PORT, () => {
  console.log(`learn-you-hangukmal express edition is listening on port ${PORT}`);
});