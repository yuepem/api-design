const express = require('express');

const bodyParser = require('body-parser')

// import routes from different version folders
const v1WorkoutRouter = require('./src/v1/routes/workoutRoutes');
const v2Router = require('./src/v2/routes')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use('/api/v1/workouts', v1WorkoutRouter);
app.use('/api/v2', v2Router);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})