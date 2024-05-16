const express = require("express");
const router = express.Router();
const cors = require("cors");

const {checkAuth, isAdmin} = require("../middlewares/userAuth");
const { addBank, getBank, deleteBank, getBanks, 
  handleRequest,getRequestsByUser, getRequests, hanldePayoutStatus } = require("../controllers/payoutController");

router.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

router.post("/addBank", checkAuth, addBank);
router.get("/getBank", checkAuth, getBank);
router.get("/getBanks", checkAuth, isAdmin, getBanks);
router.delete("/deleteBank/:id", checkAuth, deleteBank);


// payout requests
router.get('/getPayoutRequestByUser', checkAuth, getRequestsByUser)
router.get("/getPayoutRequests", checkAuth, getRequests);
router.post('/requestPayout', checkAuth, handleRequest)
router.post('/hanldePayoutStatus/:payoutId', checkAuth,isAdmin, hanldePayoutStatus)

module.exports = router;
