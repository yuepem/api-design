const express = require('express');

// import routes from different version folders
const v1Router = require('./src/v1/routes');
const v2Router = require('./src/v2/routes')

const app = express();
const PORT = process.env.PORT || 3001;


 //For Testing purposes
// app.get('/', (req, res) => {
//     res.send("It's working!");
// })

app.use('/api/v1', v1Router);
app.use('/api/v2', v2Router);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})