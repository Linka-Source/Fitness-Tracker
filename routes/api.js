const router = require("express").Router();
const Workout = require("../models/workout.js")


router.post("/api/workouts", async (req, res)  => {
  const workout = await new Workout();
  await workout.save();
  res.json(workout);
});

router.get("/api/workouts", async (req, res) => {
 const workouts = await Workout.find({}).sort({ day: -1 });
 res.json(workouts)
});



router.get("/api/workouts/range", (req, res) => {
  Workout.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});

router.put("/api/workouts/:id", (req, res) => {

    Workout.findByIdAndUpdate(
     req.params.id,
     {
       $push: { exercises: req.body },
     }
   ).then((data) => res.json(data)) 
 })



module.exports = router;