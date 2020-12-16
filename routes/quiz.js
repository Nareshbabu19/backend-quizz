const express = require("express");
const router = new express.Router();

const Question = require("./../models/quiz");

router.post("/api/Questions", async (req, res) => {
  const Q = new Question(req.body);
  try {
    await Q.save();

    res.status(201).send({ Question: Q });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/api/Questions", async (req, res) => {
  try {
    const ques = await Question.aggregate([
      { $match: {} },
      { $sample: { size: 10 } },
    ]);
    if (ques.length != 0) {
      res.send(ques);
    } else {
      res.status(400).send("Error");
    }
  } catch (e) {
    res.status(500).send();
  }
});

router.post("/api/Answers", async (req, res) => {
  const qnArray = req.body;
  const resArray = [];
  console.log(qnArray);
  for (const qn of qnArray) {
    const q = await Question.findById(qn);
    resArray.push(q.Answer);
  }
  res.send(resArray);
});

module.exports = router;
