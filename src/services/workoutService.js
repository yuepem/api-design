const workout = require('../database/workout');

const {v4: uuid} = require('uuid');

const getAllWorkouts = () => {
    const allWorkouts = workout.getAllWorkouts();
    return allWorkouts;
}

const getOneWorkout = () => {
    return;
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

const updateOneWorkout = () => {
    return;
};

const deleteOneWorkout = () => {
    return;
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}