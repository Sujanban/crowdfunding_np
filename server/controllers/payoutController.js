const User = require("../models/user.model");
const BankAccount = require("../models/bank.model");

const addBankAccount = async (req, res) => {
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

const getBankAccount = async (req, res) => {
  const { _id } = req.user;
  try {
    const bank = await BankAccount.findOne({ userId: _id });
    return res.status(200).json(bank);
  } catch (err) {
    console.log(err);
    return res.json({ error: err.message });
  }
};

const getBankAccounts = async (req, res) => {
  try {
    console.log("hello");
    const bank = await BankAccount.find({})
    .populate('userId', 'email');
    if(!bank){
      return res.status(404).json({ error: "Bank account not found" });
    }
    return res.status(200).json(bank);
  } catch (err) {
    console.log(err);
    return res.json({ error: err.message });
  }
};

const deleteBankAccount = async (req, res) => {
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
    return res.status(500).json({ error: error.message });
  }
};

// handle payout requests
const handlePayoutRequest = async (req, res) => {
  const { _id } = req.user;
  const { amount } = req.body;
  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.json({ error: "User not found" });
    }
    // TODO: check if user has enough balance
    if (user.accountBalance < amount) {
      return res.json({ error: "Insufficient balance" });
    }
    // TODO: update user balance
    user.accountBalance -= amount;
    await user.save();
    return res.json({ message: "Payout request sent successfully" });
  } catch (err) {
    return res.json({ error: err.message });
  }
};

module.exports = { addBankAccount, getBankAccount, deleteBankAccount,getBankAccounts,handlePayoutRequest };
