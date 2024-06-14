const express = require('express');

const workoutsController = require('../../controllers/workoutController');

const router = express.Router();

router.get('/', workoutsController.getAllWorkouts);

router.get('/:workoutId', workoutsController.getOneWorkout);

router.post('/', workoutsController.createNewWorkout);

router.put('/:workoutId', workoutsController.updateOneWorkout);

router.delete('/:workoutId', workoutsController.getAllWorkouts);



module.exports = router;