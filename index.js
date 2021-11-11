const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

// router
const movieRouter = require("./routers/routes/moviesRoute");

const musicRouter = require("./routers/routes/musicRoute");

const podcastRouter = require("./routers/routes/podcastRoute");

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

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
