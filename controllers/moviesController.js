// const fs = require('fs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


module.exports.getAllMovies = async function(req, res) {

  let take = parseInt(req.query.take) || 10;
  let skip = parseInt(req.query.skip) || 0;

  const movies = await prisma.movies.findMany({take, skip})
  res.send(movies);
}