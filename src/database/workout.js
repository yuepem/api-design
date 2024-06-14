const DB = require('./db.json');
const {saveToDatabase} = require('./utils');

const getAllWorkouts = () => {
    return DB.workouts;
}

const createNewWorkout = (newWorkout) => {
    const isAlreadyAdded = DB.workouts.findIndex(workout => workout.name === newWorkout.name) >= 0;
    
    if(isAlreadyAdded) {
        return;
    } else {
        DB.workouts.push(newWorkout);
        saveToDatabase(DB);
        return newWorkout;
    }
}

module.exports = {
    getAllWorkouts,
    createNewWorkout,
}