const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: {
    type: String,
    trim: true
  },
  content: {
    type: String,
    trim: true
  }
});

const Note = mongoose.model('Note', schema);

module.exports = Note;
