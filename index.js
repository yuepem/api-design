const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;


// For Testing purposes
app.get('/', (req, res) => {
    res.send("It's working!");
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})