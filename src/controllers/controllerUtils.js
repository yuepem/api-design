const getWorkoutById = (id, workouts) => {
    return workouts.find(workout => workout.id === id);
}

const getWorkoutIndexById = (id, workouts) => {
    return workouts.findIndex(workout => workout.id === id);
};


module.exports = {
    getWorkoutById,
    getWorkoutIndexById
}