const fs = require('fs');

const saveToDatabase = (DB) => {
    fs.writeFileSync('./src/database/db.json', JSON.stringify(DB, null, 2), {encoding: 'utf-8'});
};

const getWorkoutIndexById = (id, workoutsDatabase) => {
    return workoutsDatabase.findIndex(workout => workout.id === id);
};

module.exports = { 
    saveToDatabase, 
    getWorkoutIndexById,
};