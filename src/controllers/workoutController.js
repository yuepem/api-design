const workoutService = require('../services/workoutService');

const getAllWorkouts = (req, res) => {
    const allWorkouts = workoutService.getAllWorkouts();
    res.send({ status: "OK", data: allWorkouts });
};
const getOneWorkout = (req, res) => {
    const workout = workoutService.getOneWorkout();
    res.send('get a workout by id')
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
    const updatedWorkout = workoutService.updateOneWorkout();
    res.send('update a workout by id')
};
const deleteOneWorkout = (req, res) => {
    workoutService.deleteOneWorkout();
    res.send('delete a workout by id')
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}
