const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const clothesRoutes = require("./routes/clothes");
const getroute =require("./routes/getroute")
require("dotenv").config();
const cors = require("cors");
const corsOptions = {
  origin : "https://fitifinder.netlify.app",
  optionsSuccess :200
}


mongoose
.connect(
  'mongodb+srv://fitfinder:fitfinder123@fitfinder.ut2uirp.mongodb.net/?retryWrites=true&w=majority',
  {}
  )
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.log("Unable to connect to MongoDB Atlas");
    console.error(err);
  });
  
  // app.use(cors());
  app.use(cors(corsOptions));
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
  
  app.use(bodyParser.json());

  app.use("/users", authRoutes);
  
  app.use("/clothes", clothesRoutes);

  app.use("/stylethird",getroute)

  app.listen(3003, () => {
    console.log("Server running on port 3003");
  });
  


