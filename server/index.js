const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cookie_parser = require("cookie-parser");

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

const app = express();
app.use(express.json());
app.use(cookie_parser());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => console.log(err));


app.use("/api/auth/", require("./routes/authRoutes"));
app.use("/api/category/", require("./routes/categoryRoutes"));
app.use("/api/user/", require("./routes/userRoutes"));
app.use("/api/campaign/", require("./routes/campaignRoutes"));


app.listen(port, () => console.log(`Server running on port: ${port}`));
