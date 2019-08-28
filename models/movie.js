/* eslint-disable linebreak-style */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const movieSchema = new Schema({
  title: String,
  description: String,
  imgName: String,
  imgPath: String,
}, {
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
