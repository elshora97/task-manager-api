const express = require("express");
const app = express();
const tasks = require("./routes/tasks.js");
const connectDB = require("./db/connect.js");
const notFound = require("./middleware/not-found.js");
const errorHandlerMiddleware = require("./middleware/error-handler.js");
require("dotenv").config();

//middleware
app.use(express.static("./public"));
app.use(express.json());

//routes
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

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
