const workoutService = require('../services/workoutService');


const getAllWorkouts = (req, res) => {
    try {
        const allWorkouts = workoutService.getAllWorkouts();
        res.send({ status: "OK", data: allWorkouts });
    } catch (error) {
        res.status(error.status || 500).send({
            status: "FAILED",
            data: {
                error: error?.message || error
            }
        });
    }
};
const getOneWorkout = (req, res) => {
    const workoutId = req.params.workoutId;
    // console.log('Received workoutId:', workoutId);

    if (!workoutId) {
        res.status(400).send({
            status: 'FAILED',
            data: { error: "Workout ID can not be empty!" }
        });

        return;
    }

    try {
        let targetWorkout = workoutService.getOneWorkout(workoutId);

        if (!targetWorkout) {
            res.status(404).send({ status: 'FAILED', message: 'Workout not found' });
        }

        res.status(200).send({ status: 'OK', data: targetWorkout });
    } catch (error) {
        res.status(error.status || 500).send({
            status: "FAILED",
            data: {
                error: error?.message || error
            }
        });
    }
};

const createNewWorkout = (req, res) => {

    const { body } = req;
    if (!body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips) {
        res.status(400).send({
            status: "FAILED",
            data: {
                error: "One of the required fields is missing"
            }
        })

        return;
    };

    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips
    };

    try {
        const createWorkout = workoutService.createNewWorkout(newWorkout);
        res.status(201).send({ status: "OK", data: createWorkout });
    } catch (error) {
        res.status(error?.status || 500).send({
            status: "FAILED",
            data: {
                error: error?.message || error
            }
        });
    }
};

const updateOneWorkout = (req, res) => {
    const workoutId = req.params.workoutId;

    if (!workoutId) {
        res.status(400).send({
            status: "FAILED",
            data: {
                error: "Workout ID can not be empty!"
            }
        })
        return;
    }
    try {
        const updatedWorkout = workoutService.updateOneWorkout(workoutId, req.body);
        res.status(204).send({ status: "OK", data: updatedWorkout });
    } catch (error) {
        res.status(error.status || 500).send({
            status: "FAILED",
            data: {
                error: error?.message || error
            }
        });
    }
};
const deleteOneWorkout = (req, res) => {
    const workoutId = req.params.workoutId;

    if (!workoutId) {
        res.status(400).send({
            status: "FAILED",
            data: {
                error: "Workout ID can not be empty!"
            }
        })
        return;
    }

    try {
        workoutService.deleteOneWorkout(workoutId);
        res.status(204).send({ status: "OK" });
    } catch (error) {
        res.status(error.status || 500).send({
            status: "FAILED",
            data: {
                error: error?.message || error
            }
        });
    }
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}
