const router = require("express").Router();
const Workout = require("../models/workout");

//Validate responses before sending
const goodResponse = (dbWorkout, res) => {
  res.json(dbWorkout);
};

const badResponse = (err, res) => {
  res.status(400).json(err);
};

const findAll = (req, res) => {
  Workout.find({})
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("error", err);
      res.json(err);
    });
};

const create = ({ body }, res) => {
  console.log("Body Object:", body);
  Workout.create({})
    .then((data) => goodResponse(data, res))
    .catch((err) => badResponse(err, res));
};

const update = (req, res) => {
  Workout.findByIdAndUpdate(
    req.params.id,
    { $push: { exercises: req.body } },
    { new: true, runValidators: true }
  )
    .then((data) => goodResponse(data, res))
    .catch((err) => badResponse(err, res));
};

router.route("/workouts").get(findAll).post(create);
router.route("/workouts/:id").put(update);

router.route("/workouts/range").get(findAll);
module.exports = router;
