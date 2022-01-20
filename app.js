const express = require("express");
const app = express();
const errorMiddleware = require("./middlewares/error");
const cors = require("cors");
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cors());
app.use(cookieParser())

const course = require("./routes/courseRoute");
app.use("/api/v1", course);
const user = require('./routes/userRoute')
app.use('/api/v1', user)

// Error middleware
app.use(errorMiddleware);

module.exports = app;
