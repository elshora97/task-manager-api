const express = require("express");
const app = express();
const tasks = require("./routes/tasks.js");
const connectDB = require("./db/connect.js");
require("dotenv").config();

//middleware
app.use(express.static("./public"));
app.use(express.json());

//routes

app.use("/api/v1/tasks", tasks);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is listening to port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
