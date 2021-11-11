const express = require("express");
const {
  getAllEbook,
  getBookById,
} = require("./../controllers/ebookController");

// const getAllMoviesMiddleware = (req, res, next) => {
//   console.log("get All Movies");
//   next();
// };

const ebookRouter = express.Router();

ebookRouter.get("/", getAllEbook);
ebookRouter.get("/:id", getBookById);

module.exports = ebookRouter;
