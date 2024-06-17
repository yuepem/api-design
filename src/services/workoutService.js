const workout = require('../database/workout');

const {v4: uuid} = require('uuid');

const getAllWorkouts = () => {
    const allWorkouts = workout.getAllWorkouts();
    return allWorkouts;
}

const getOneWorkout = (workoutId) => {
    const workout = workout.getOneWorkout(workoutId);
    return workout;
};

const createNewWorkout = (newWorkout) => {
    const workToInsert = {
        ...newWorkout,
        id: uuid(),
        createAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
        updateAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
    }

    const createWorkout = workout.createNewWorkout(workToInsert);
    return createWorkout;
}; 

const updateOneWorkout = (workoutId, changes) => {
    const updatedWorkout = workout.updateOneWorkout(workoutId, changes);
    return updatedWorkout;
};

const deleteOneWorkout = (workoutId) => {
    workout.deleteOneWorkout(workoutId);
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}