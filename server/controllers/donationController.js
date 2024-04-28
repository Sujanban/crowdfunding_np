const Stripe = require("stripe");
const User = require("../models/user.model");
const Donation = require("../models/donation.model");
const Campaign = require("../models/campaign.model");
const mongoose = require("mongoose");

const createDonation = async (req, res) => {
  try {
    const { amount, userId } = req.body;
    const campaignId = req.params.campaignId;

    if (!amount || !userId || !campaignId)
      return res.json({ error: "Please provide all fields" });

    const user = await User.findById(userId);
    const campaign = await Campaign.findById(campaignId);

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    const session = await  stripe.checkout.sessions.create({
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
              description: campaign.campaignDescription,
            },
            unit_amount: amount * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/failed",
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
    console.log(session);
    res.json({ message: "Processing...", url: session.url });
  } catch (error) {
    console.error("Stripe error:", error);
    res.status(500).json({ error: "Failed to create Stripe session" });
    return;
  }
};

module.exports = { createDonation };
