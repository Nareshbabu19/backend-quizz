const express = require("express");
var cors = require("cors");

const quizRouter = require("./routes/quiz");
const userRouter = require("./routes/user");
require("./db/mongoose");

const app = express();
const port = process.env.PORT || 3000;

// app.use(function(req,res,next){
//     res.header
// });

var corsOptions = {
  origin: "https://quizz-app-511d6.web.app/",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.get("/products/:id", cors(corsOptions), function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for only example.com." });
});

app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80");
});
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
