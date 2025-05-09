const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const connectDb = require('./db/db.js');

connectDb();
const app = express();

app.use(cors());  

app.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = app;