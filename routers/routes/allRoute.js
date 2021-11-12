const express = require("express");
const {
    getAll,
    getAllById,
} = require("./../controllers/allController");

// const getAllMoviesMiddleware = (req, res, next) => {
//   console.log("get All Movies");
//   next();
// };

const allRouter = express.Router();

allRouter.get("/", getAll);
allRouter.get("/:id", getAllById);

module.exports = allRouter;
