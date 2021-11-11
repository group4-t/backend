
const express = require("express");
const {
  getAllMovies,
  getMovieById,
} = require("./../controllers/moviesController");

// const getAllMoviesMiddleware = (req, res, next) => {
//   console.log("get All Movies");
//   next();
// };

const movieRouter = express.Router();

movieRouter.get("/", getAllMovies);
movieRouter.get("/:id", getMovieById);

module.exports = movieRouter;