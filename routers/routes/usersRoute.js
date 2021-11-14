const express = require("express");

const {
  getAllUsers,
  addNewUser,
  addToUserFav,
  removeFromUserFav 
} = require("./../controllers/usersController");

const usersRouter = express.Router();

usersRouter.get("/", getAllUsers);

usersRouter.put("/addFav", addToUserFav);


usersRouter.put("/removeFav" , removeFromUserFav)

usersRouter.post("/addNew", addNewUser);
module.exports = usersRouter;
