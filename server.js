const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const ConnectDB = require('./config/db');
//variaveis de ambiente
dotenv.config({ path: './config/config.env' });
const app = express();
//cors and json
app.use(cors());
app.use(express.json());
//routes
app.use('/api/v1/store', require('./routes/store'));
//connect to database
ConnectDB().then(() =>
    console.log('MongoDB Connected...')
).catch(err =>
    console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));