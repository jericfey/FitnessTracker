const router = require("express").Router();
const Workout = require("../models/workout.js");


//Get last workout
router.get("/api/workout", (req, res) => {
  Workout.find({ })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
// router.post("/api/workout", ({ body }, res) => {
//   Workout.create(body)
//     .then((dbWorkout) => {
//       res.json(dbWorkout);
//     })
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// });

// router.post("/", ({ body }, res) => {
//   Workout.insertMany(body)
//     .then((dbWorkout) => {
//       res.json(dbWorkout);
//     })
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// });



module.exports = router;
