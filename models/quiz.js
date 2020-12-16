const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  Qn: {
    type: String,
    required: true,
    trim: true,
  },
  Answer: {
    type: Number,
    required: true,
  },
  Options: [
    {
      type: String,
    },
  ],
});

quizSchema.methods.toJSON = function () {
  const { __v, _id, ...object } = this.toObject();

  object.QnID = _id;

  return object;
};

const Question = mongoose.model("Question", quizSchema);

module.exports = Question;
