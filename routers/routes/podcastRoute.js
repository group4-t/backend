const express = require("express");
const {
  getAllPodcast,
  getPodcastById,
} = require("./../controllers/podcastController");

const podcastRouter = express.Router();

podcastRouter.get("/", getAllPodcast);
podcastRouter.get("/:id", getPodcastById);

module.exports = podcastRouter;
