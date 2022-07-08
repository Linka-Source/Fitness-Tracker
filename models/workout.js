const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: new Date()
      },
  exercises: [{
    type: {
        type: String,
    },
  name: {
    type: String,
  },
  duration: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  reps: {
      Type: Number,
  },
  sets: {
      Type: Number,
  },
  distance: {
      Type: Number,
  }
  }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;