const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

// const fs = require("fs");

// let usres = [];

//read file
// fs.readFile("./db/users.json" , (err,data)=>{
//   usres = JSON.parse(data.toString());
// })

// const getAllUsers = (req,res)=>{
//   res.json(usres)
// }
// app.get("/users", (req,res)=>{
//   res.json(usres)
// })

// router
const movieRouter = require("./routers/routes/moviesRoute");

const musicRouter = require("./routers/routes/musicRoute");

const podcastRouter = require("./routers/routes/podcastRoute");

const ebookRouter = require("./routers/routes/ebookRoute");

const allRouter = require("./routers/routes/allRoute");

const usersRouter = require("./routers/routes/usersRoute");

const app = express();

//app level middleware
app.use(express.json());
const appMiddleware = (req, res, next) => {
  console.log("appMiddleware");
  next();
};
app.use(appMiddleware);
app.use(cors());

app.use(morgan("dev"));

//routers level middleware
app.use("/movies", movieRouter);
app.use("/music", musicRouter);
app.use("/podcast", podcastRouter);
app.use("/ebook", ebookRouter);
app.use("/all", allRouter);
app.use("/users", usersRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
