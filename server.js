const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
//variaveis de ambiente
dotenv.config({ path: './config/config.env' });
const app = express();
//cors and json
app.use(cors());
app.use(express.json());
app.get('/api/v1/store', (req, res) => {
    res.status(200).json({ msg: 'Welcome to the Store API' });
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));