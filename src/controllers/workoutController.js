const workoutService = require('../services/workoutService');

const getAllWorkouts = (req, res) => {
    console.log('received GETAll request');
    const allWorkouts = workoutService.getAllWorkouts();
    res.send({ status: "OK", data: allWorkouts });
};
/* const getOneWorkout = (req, res) => {
   const workoutId = req.params.workoutId;
   console.log(workoutId);

   if(!workoutId) {
       return;
   }

   // const workout = workoutService.getOneWorkout(workoutId);
   // initialized it as an empty object
   let workout;
   try {
       workout = workoutService.getOneWorkout(workoutId);
   } catch (error) {
       // Handle any errors that may occur in getOneWorkout()
       console.error('Error getting workout:', error);
       return res.status(500).send({ status: 'Error', message: 'Failed to get workout' });
   }

   res.send( {status: "OK!", data: workout});
  
}; */

const getOneWorkout = (req, res) => {
    const workoutId = req.params.workoutId;
    console.log('Received workoutId:', workoutId);

    if (!workoutId) {
        return res.status(400).send({ status: 'FAILED', message: 'Invalid workout ID' });
    }

    try {
        let workout = workoutService.getOneWorkout(workoutId);

        if (!workout) {
            return res.status(404).send({ status: 'FAILED', message: 'Workout not found' });
        }

        res.status(200).send({ status: 'OK', data: workout });
    } catch (error) {
        console.error('Error getting workout:', error);
        res.status(500).send({ status: 'FAILED', message: 'Failed to get workout' });
    }
};

const createNewWorkout = (req, res) => {

    const { body } = req;
    if (!body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips) {
        return;
    }

    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips
    }

    const createWorkout = workoutService.createNewWorkout(newWorkout);
    res.status(201).send({ status: "OK", data: createWorkout });
};
const updateOneWorkout = (req, res) => {
    const workoutId = req.params.workoutId;

    if (!workoutId) {
        return;
    }

    const updatedWorkout = workoutService.updateOneWorkout(workoutId, req.body);
    res.status(204).send({ status: "OK", data: updatedWorkout });
};
const deleteOneWorkout = (req, res) => {
    const workoutId = req.params.workoutId;

    if (!workoutId) {
        return;
    }

    workoutService.deleteOneWorkout(workoutId);
    res.status(204).send({ status: "OK" });
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}
