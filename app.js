const express = require("express");
const app = express();
const errorMiddleware = require("./middlewares/error");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");

app.use(express.json());
app.use(cors());
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

const course = require("./routes/courseRoute");
app.use("/api/v1", course);
const user = require('./routes/userRoute')
app.use('/api/v1', user)

app.get("/", (req, res) => {
  res.send("api is running...");
});

// Error middleware
app.use(errorMiddleware);

module.exports = app;
