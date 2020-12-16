const express = require("express");

const quizRouter = require("./routes/quiz");
const userRouter = require("./routes/user");
require("./db/mongoose");

const app = express();
const port = 3000;

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
