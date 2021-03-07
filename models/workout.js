const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Please select exercise type",
        },
        name: {
          type: String,
          trim: true,
          required: "Please create an excercise name",
        },
        duration: {
          type: Number,
          required: "Duration required for all workouts",
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
      },
    ],
  },
  { toJSON: { virtuals: true } }
);

//Workout duration total requires virtual type constructor for duration attribute calculation
WorkoutSchema.virtual("totalDuration").get(() => {
  let totalDuration = 0;
  this.exercises.forEach((exercise) => {
    totalDuration += exercise.duration;
  });
  return totalDuration;
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
