const express = require("express");
const {
  getAllMusic,
  getMusicById,
} = require("./../controllers/musicController");

const musicRouter = express.Router();

musicRouter.get("/", getAllMusic);
musicRouter.get("/:id", getMusicById);

module.exports = musicRouter;
