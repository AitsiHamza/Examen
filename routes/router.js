const Router = require('express').Router();
const moviesController = require('../controllers/moviesController');

Router.route('/movies')
  .get(moviesController.getAllMovies);


module.exports = Router;