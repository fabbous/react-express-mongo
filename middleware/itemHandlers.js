const items = require('../data/items.js');

function getAll(req, res) {
  res.json(items);
}

function addOne(req, res) {
  let newItem = req.body;
  newItem.id = items.length;
  items.push(newItem);
  res.json(newItem);
}

function getOneByID(req, res) {
  let itemId = req.params.id;
  res.json(items[itemId]);
}

module.exports = {
  getAll: getAll,
  addOne: addOne,
  getOneByID: getOneByID
}