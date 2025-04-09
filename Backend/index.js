// Import required modules
const express = require("express");
const { connectDB } = require("./dbConfig");
const { userRouter } = require("./routes/user.routes");
const cors = require("cors");

const app = express();


app.use(
  cors({
    origin: "*",          
    methods: ["GET", "POST", "PUT", "DELETE"], 
    allowedHeaders: ["Content-Type", "Authorization"], 
    credentials: true,                       
  })
);


app.use(express.json());


app.use("/users", userRouter);

app.listen(8080, () => {
  connectDB();
  console.log("Server is running at http://localhost:8080");
});

