const express = require("express");
const app = express();

app.use(express.json());

const course = require('./routes/courseRoute')
app.use('/api/v1',course )

module.exports = app;
