const workout = require('../database/workout');

const { v4: uuid } = require('uuid');


const getAllWorkouts = () => {
    try {
        const allWorkouts = workout.getAllWorkouts();
        return allWorkouts;
    } catch (error) {
        throw error;
    }
}

const getOneWorkout = (workoutId) => {
    try {
        const targetWorkout = workout.getOneWorkout(workoutId);
        return targetWorkout;
    } catch (error) {
        throw error;
    }
};

const createNewWorkout = (newWorkout) => {
    const workToInsert = {
        ...newWorkout,
        id: uuid(),
        createAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
        updateAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
    }

    try {
        const createWorkout = workout.createNewWorkout(workToInsert);
        return createWorkout;
    } catch (error) {
        throw error;
    }
};

const updateOneWorkout = (workoutId, changes) => {
    try {
        const updatedWorkout = workout.updateOneWorkout(workoutId, changes);
    return updatedWorkout;
    } catch (error) {
        throw error;
    }
};

const deleteOneWorkout = (workoutId) => {
    try {
        workout.deleteOneWorkout(workoutId);
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}