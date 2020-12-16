const express = require("express");
const router = new express.Router();

const User = require("./../models/user");

router.post("/api/InsertParticipant", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();

    res.status(201).send({ user });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/api/UpdateOutput", async (req, res) => {
  console.log(req.body);
  const user = req.body.user;
  const score = req.body.Score;
  const time = req.body.TimeSpent;

  try {
    const Participant = await User.findByIdAndUpdate(user._id, {
      score,
      timespent: time,
    });
    res.send(Participant);
  } catch (error) {
    res.status(400).send(e);
  }
});

module.exports = router;
