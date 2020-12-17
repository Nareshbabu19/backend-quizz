const express = require("express");
var cors = require("cors");
app.use(cors());

const quizRouter = require("./routes/quiz");
const userRouter = require("./routes/user");
require("./db/mongoose");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(userRouter);
app.use(quizRouter);

app.listen(port, () => {
  console.log("Server is running on port:", port);
});

app.get("/products/:id", cors(), function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for a Single Route" });
});

app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80");
});
