const express = require('express');

const router = express.Router();
app.get('/api/v1/store', (req, res) => {
    res.status(200).json({ msg: 'Welcome to the Store API' });
});
module.exports = router;