const express = require("express");
const router = express.Router();
const cors = require("cors");

const {checkAuth} = require("../middlewares/userAuth");
const { addBankAccount } = require("../controllers/payoutController");

router.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

router.post("/addBank", checkAuth, addBankAccount);

module.exports = router;
