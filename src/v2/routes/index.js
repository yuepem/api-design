const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send(`<h2>${req.baseUrl}</h2>`)
})

module.exports = router;