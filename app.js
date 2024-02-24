const express = require("express");
const app = express();
const tasks = require("./routes/tasks.js");

//middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api/v1/tasks", tasks);

const port = 3000;
app.listen(port, () => {
  console.log(`server is listening to port ${port}...`);
});
