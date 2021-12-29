const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  isDone: {
    type: Boolean,
    required: true,
  },
  date: {
    type: String,
    default: Date(),
  },
});

module.exports = Item = mongoose.model('item', ItemSchema);
