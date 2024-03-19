const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

const app = express();
app.use(express.json());


mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => console.log(err));


app.use("/", require("./routes/authRoutes"));


app.listen(port, () => console.log(`Server running on port: ${port}`));