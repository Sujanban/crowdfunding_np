const Stripe = require("stripe");
const User = require("../models/user.model");
const Donation = require("../models/donation.model");
const Campaign = require("../models/campaign.model");
const mongoose = require("mongoose");

const createDonation = async (req, res) => {
  try {
    const { amount, userId } = req.body;
    const campaignId = req.params.campaignId;

    if (!amount)
      return res.json({ error: "Please enter an amount to Donate!" });

    if (amount < 20) return res.json({ error: "Minimum Donation is 20" });

    if (!userId) return res.json({ error: "Please Login to Donate" });
    if (!campaignId)
      return res.json({ error: "Please select a campaign to Donate" });

    const user = await User.findById(userId);
    const campaign = await Campaign.findById(campaignId);

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_email: user.email,
      client_reference_id: campaignId,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: campaign.campaignTitle,
              images: [campaign.thumbnail],
            },
            unit_amount: amount * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",

      success_url: process.env.PAYMENT_SUCCESS_URL,
      cancel_url: process.env.PAYMENT_CANCEL_URL,
    });

    const donation = new Donation({
      campaignId,
      userId,
      amount,
      session: session.id,
    });
    await donation.save();
    await User.findByIdAndUpdate(userId, {
      $push: { donations: donation._id },
    });
    res.json({ url: session.url });
  } catch (error) {
    res.status(500).json({ error: "Failed to create Stripe session" });
    return;
  }
};

const fetchAllDonation = async (req, res) => {
  try {

    const page = parseInt(req.query.page) || 1; // Default to first page
    const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page
    const skip = (page - 1) * limit; // Calculate how many items to skip


    const sortOrder = req.query.sortOrder === "asc" ? 1 : -1;
    const donations = await Donation.find()
      .populate("userId", "firstName lastName email")
      .populate("campaignId", "campaignTitle campaignDescription")
      .sort({ createdAt: sortOrder })
      .skip(skip)
      .limit(limit);

    res.status(200).json({donations, page, limit });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch donations" });
  }
};

module.exports = { createDonation, fetchAllDonation };
