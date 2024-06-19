const DB = require('./db.json');
const { saveToDatabase, getWorkoutIndexById } = require('./utils');


const getAllWorkouts = () => {
    try {
        return DB.workouts;
    } catch (error) {
        throw { status: 500, message: error };
    };
}

const getOneWorkout = (workoutId) => {
    try {
        const workoutIndex = getWorkoutIndexById(workoutId, DB.workouts);

        if (workoutIndex < 0) {
            throw {
                status: 400,
                message: `Workout not found with the id ${workoutId}`
            }
        }

        return DB.workouts[workoutIndex];
    } catch (error) {
        throw {
            status: error?.status || 500,
            message: error?.message || error
        }
    }
};

const createNewWorkout = (newWorkout) => {
    try {
        const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === newWorkout.name) >= 0;

        if (isAlreadyAdded) {
            throw {
                status: 400,
                message: `Workout with the name ${newWorkout.name} already exists`
            }
        } else {
            DB.workouts.push(newWorkout);
            saveToDatabase(DB);
            return newWorkout;
        }
    } catch (error) {
        throw {
            status: error?.status || 500,
            message: error?.message || error
        }
    }
}

const updateOneWorkout = (workoutId, changes) => {
    try {
        const indexForUpdate = getWorkoutIndexById(workoutId, DB.workouts);

        if (indexForUpdate < 0) {
            throw {
                status: 400,
                message: `Workout not found with the id ${workoutId}`
            }
        }

        const updatedWorkout = {
            ...DB.workouts[indexForUpdate],
            ...changes,
            updateAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
        };

        DB.workouts[indexForUpdate] = updatedWorkout;
        saveToDatabase(DB);
        return updatedWorkout;
    } catch (error) {
        throw {
            status: error?.status || 500,
            message: error?.message || error
        }
    }

}

const deleteOneWorkout = (workoutId) => {
    try {
        const indexForDelete = getWorkoutIndexById(workoutId, DB.workouts);
        if (indexForDelete < 0) {
            throw {
                status: 400,
                message: `Workout not found with the id ${workoutId}`
            }
        }

        DB.workouts.splice(indexForDelete, 1)
        saveToDatabase(DB);
    } catch (error) {
        throw {
            status: error?.status || 500,
            message: error?.message || error
        }
    }
}


module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
}