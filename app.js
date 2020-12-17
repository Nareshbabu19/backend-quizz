const express = require("express");
const cors = require("cors");

const quizRouter = require("./routes/quiz");
const userRouter = require("./routes/user");
require("./db/mongoose");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", "https://quizz-app-511d6.web.app");
  if (req.method === "OPTIONS") {
    res.status(200);
  }
  next();
});

app.use(userRouter);
app.use(quizRouter);

app.listen(port, () => {
  console.log("Server is running on port:", port);
});

app.get("/products/:id", cors(), function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for a Single Route" });
});
