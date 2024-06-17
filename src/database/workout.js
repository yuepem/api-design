const DB = require('./db.json');
const { saveToDatabase, getWorkoutIndexById } = require('./utils');

const getAllWorkouts = () => {
    return DB.workouts;
}

const getOneWorkout = (workoutId) => {

    const workoutIndex = getWorkoutIndexById(workoutId, DB.workouts);

    if (workoutIndex < 0) {
        return null;
    }

    return DB.workouts[workoutIndex];

   /*  const workout = DB.workouts.find((workout) => workout.id === workoutId);
    if (!workout) {
        return;
    }
    return workout; */

}

const createNewWorkout = (newWorkout) => {
    const isAlreadyAdded = DB.workouts.findIndex(workout => workout.name === newWorkout.name) >= 0;

    if (isAlreadyAdded) {
        return;
    } else {
        DB.workouts.push(newWorkout);
        saveToDatabase(DB);
        return newWorkout;
    }
}

const updateOneWorkout = (workoutId, changes) => {
    const indexForUpdate = getWorkoutIndexById(workoutId, DB.workouts);

    if (indexForUpdate < 0) {
        return;
    }

    const updatedWorkout = {
        ...DB.workouts[indexForUpdate],
        ...changes,
        updateAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
    };

    DB.workouts[indexForUpdate] = updatedWorkout;
    saveToDatabase(DB);
    return updatedWorkout;

}

const deleteOneWorkout = (workoutId) => {
    const indexForDelete = getWorkoutIndexById(workoutId, DB.workouts);
    if (indexForDelete < 0) {
        return;
    }

    DB.workouts.splice(indexForDelete, 1)
    saveToDatabase(DB);
}


module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
}