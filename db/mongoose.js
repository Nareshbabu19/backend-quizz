const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://nb:nbuser@cluster0.hjjhk.mongodb.net/quizapp?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);
