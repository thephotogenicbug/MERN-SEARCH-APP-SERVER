const express = require("express");
const app = express();
const errorMiddleware = require("./middlewares/error");
const cors = require("cors");

app.use(express.json());
app.use(cors());

const course = require("./routes/courseRoute");
app.use("/api/v1", course);

// Error middleware
app.use(errorMiddleware);

module.exports = app;
