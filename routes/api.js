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
  Workout.create({})
    .then((data) => goodResponse(data, res))
    .catch((err) => badResponse(err, res));
};

//* add routes for ../public api.js

// //* getLastWorkout()
// router.get("/api/workouts", (req, res) => {
//   db.Workout.find({})
//     .then((data) => {
//       res.json(data);
//       console.log(data);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// //* addExercise()
// router.put("/workouts/:id", ({ params, body }, res) => {
//   console.log(body);
//   db.Workout.findByIdAndUpdate(
//     params.id,
//     {
//       $push: {
//         exercises: body,
//       },
//     },
//     {
//       new: true,
//       runValidators: true,
//     }
//   )
//     .then((dbWorkout) => {
//       res.json(dbWorkout);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// //* createWorkout();
// router.post("/workouts", ({ body }, res) => {
//   console.log(body);
//   db.Workout.create({})
//     .then((dbWorkout) => {
//       res.json(dbWorkout);
//     })
//     .catch((err) => {
//       res.json(err);
//     });

//   res.send("Got a POST request");
// });

// //* getWorkoutsInRange
// router.get("/workouts/range", (req, res) => {
//   db.Workout.find({})
//     .limit(7)
//     .then((dbWorkout) => {
//       res.json(dbWorkout);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

router.route("/workouts").get(findAll).post(create);

module.exports = router;
