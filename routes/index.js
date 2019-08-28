/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

const express = require('express');

const router = express.Router();

const Movie = require('../models/movie.js');

const uploadCloud = require('../config/cloudinary');

/* GET home page. */
router.get('/', (req, res, next) => {
  Movie.find({})
    .then((movies) => {
      res.render('index', { movies });
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/movie/add', uploadCloud.single('photo'), (req, res, next) => {
  const { title, description } = req.body;
  const imgPath = req.file.url;
  const imgName = req.file.originalname;
  const newMovie = new Movie({
    title, description, imgPath, imgName,
  });
  newMovie.save()
    .then((movie) => {
      res.redirect('/');
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
