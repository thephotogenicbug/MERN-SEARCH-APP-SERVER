const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/database");

dotenv.config({ path: "config/config.env" });
connectDB();



app.listen(process.env.PORT, () => {
  console.log(`server is running on port http://localhost:${process.env.PORT}`);
});
