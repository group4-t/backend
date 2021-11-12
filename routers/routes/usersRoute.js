const express = require("express");

const {
  getAllUsers,
  addNewUser,
  addToUserFav,
} = require("./../controllers/usersController");

const usersRouter = express.Router();

usersRouter.get("/", getAllUsers);

usersRouter.put("/addFav", addToUserFav);

usersRouter.post("/addNew", addNewUser);
module.exports = usersRouter;
