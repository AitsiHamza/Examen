const Router = require('express').Router();
const moviesController = require('../controllers/moviesController');

Router.route('/movies')
  .get(moviesController.getAllMovies);

Router.route('/')
  .get(moviesController.getAllMovies);



module.exports = Router;