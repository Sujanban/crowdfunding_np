const express = require("express");
const router = express.Router();
const cors = require("cors");

const {checkAuth, isAdmin} = require("../middlewares/userAuth");
const { addBankAccount, getBankAccount, deleteBankAccount, getBankAccounts } = require("../controllers/payoutController");

router.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

router.post("/addBank", checkAuth, addBankAccount);
router.get("/getBank", checkAuth, getBankAccount);
router.get("/getBanks", checkAuth, isAdmin, getBankAccounts);
router.delete("/deleteBank/:id", checkAuth, deleteBankAccount);

module.exports = router;
