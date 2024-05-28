const User = require("../models/user.model");
const BankAccount = require("../models/bank.model");
const PayoutRequest = require("../models/payoutRequest.model");
const {sendPaymentInitiationEmail} = require("../utils/nodemailer");

const addBank = async (req, res) => {
  const { _id } = req.user;
  const { stripeAccount } = req.body;
  if (!stripeAccount) {
    return res.json({ error: "Please enter stripe account details" });
  }
  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.json({ error: "User not found" });
    }
    const bank = new BankAccount({
      userId: _id,
      stripeAccountId: stripeAccount,
    });
    await bank.save();
    return res
      .status(200)
      .json({ message: "Bank account added successfully", bank });
  } catch (err) {
    return res.json({ error: err.message });
  }
};

const getBank = async (req, res) => {
  const { _id } = req.user;
  try {
    const bank = await BankAccount.findOne({ userId: _id });
    return res.status(200).json(bank);
  } catch (err) {
    console.log(err);
    return res.json({ error: err.message });
  }
};

const getBanks = async (req, res) => {
  try {
    const bank = await BankAccount.find({}).populate(
      "userId",
      "email accountBalance"
    );
    if (!bank) {
      return res.status(404).json({ error: "Bank account not found" });
    }
    return res.status(200).json(bank);
  } catch (err) {
    console.log(err);
    return res.json({ error: err.message });
  }
};

const deleteBank = async (req, res) => {
  try {
    const id = req.params.id;
    const bank = await BankAccount.findByIdAndDelete(id);
    if (!bank) {
      return res.status(404).json({ error: "Bank account not found" });
    }
    return res
      .status(200)
      .json({ message: "Bank account deleted successfully", bank });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

// Payout request sextion
// handle payout requests
const handleRequest = async (req, res) => {
  const { _id } = req.user;
  const { amount } = req.body;
  try {
    if (amount <= 50) {
      return res.json({ error: "Your balance is less than 50" });
    }
    const user = await User.findById(_id);
    if (!user) {
      return res.json({ error: "User not found" });
    }
    if (user.accountBalance < amount) {
      return res.json({ error: "Insufficient balance" });
    }
    user.accountBalance -= amount;
    user.freezeBalance += amount;
    await user.save();

    const payoutRequest = new PayoutRequest({
      userId: _id,
      amount: amount,
      status: "pending",
    });
    await payoutRequest.save();
    return res.json({ message: "Payout request sent successfully" });
  } catch (err) {
    console.log(err);
    return res.json({ error: err.message });
  }
};

// get payout request
const getRequestsByUser = async (req, res) => {
  const { _id } = req.user;
  try {
    const request = await PayoutRequest.find({ userId: _id }).sort({
      createdAt: -1,
    });
    if (!request) {
      return res.status(404).json({ error: "No payout request found" });
    }
    return res.status(200).json(request);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const getRequests = async (req, res) => {
  try {
    const requests = await PayoutRequest.find({})
      .populate("userId", "email")
      .sort({ createdAt: -1 });
    if (!requests) {
      return res.status(404).json({ error: "No payout requests found" });
    }
    return res.status(200).json(requests);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const hanldePayoutStatus = async (req, res) => {
  const { payoutId } = req.params;
  const { status } = req.body;
  try {
    const request = await PayoutRequest.findById(payoutId);
    if (!request) {
      return res.status(404).json({ error: "No payout request found" });
    }
    request.status = status;
    const updatedRequest = await request.save();
    const user = await User.findById(updatedRequest.userId);

    if (updatedRequest.status === "approved") {
      user.freezeBalance -= request.amount;
      sendPaymentInitiationEmail(user.email);
      await user.save();
    }

    if (updatedRequest.status === "rejected") {
      user.accountBalance += request.amount;
      user.freezeBalance -= request.amount;
      await user.save();
    }

    return res
      .status(200)
      .json({ message: "Payout status updated", request: updatedRequest });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addBank,
  getBank,
  deleteBank,
  getBanks,
  handleRequest,
  getRequests,
  getRequestsByUser,
  hanldePayoutStatus,
};
