const express = require("express");
const {
    getAllMusic,
    getMusicById,
} = require("./../controllers/musicController");

// const getAllMoviesMiddleware = (req, res, next) => {
//   console.log("get All Movies");
//   next();
// };

const musicRouter = express.Router();

musicRouter.get("/",  getAllMusic);
musicRouter.get("/:id", getMusicById);

module.exports = musicRouter;
