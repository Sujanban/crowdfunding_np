const User = require("../models/user.model");
const Bank = require("../models/bank.model");

const addBankAccount = async (req, res) => {
  const { _id } = req.user;
  const { stripeAccount } = req.body;
  if (!stripeAccount) {
    return res.json({ error: "Please enter stripe account details" });
  }
  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const bank = new Bank({
      userId: _id,
      stripeAccountId: stripeAccount,
    });
    await bank.save();
    return res.status(200).json({ message: "Bank account added successfully" });
  } catch (err) {
    return res.json({ error: err.message });
  }
};

module.exports = { addBankAccount };
