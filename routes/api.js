const router = require("express").Router();
const db = require("../models");

//* add routes for ../public api.js

//* getLastWorkout()
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((data) => {
      res.json(data);
      console.log(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

//* addExercise()
router.put("/workouts/:id", ({ params, body }, res) => {
  console.log(body);
  db.Workout.findByIdAndUpdate(
    params.id,
    {
      $push: {
        exercises: body,
      },
    },
    {
      new: true,
      runValidators: true,
    }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

//* createWorkout();
router.post("/workouts", ({ body }, res) => {
  console.log(body);
  db.Workout.create({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });

  res.send("Got a POST request");
});

//* getWorkoutsInRange
router.get("/workouts/range", (req, res) => {
  db.Workout.find({})
    .limit(7)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
