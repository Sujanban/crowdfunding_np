const Stripe = require("stripe");
const User = require("../models/user.model");
const Donation = require("../models/donation.model");
const Campaign = require("../models/campaign.model");

// creating a donation
const createDonation = async (req, res) => {
  try {
    const { amount, userId, campaignId } = req.body;
    if (!amount)
      return res.json({ error: "Please enter an amount to Donate!" });
    if (amount < 20) return res.json({ error: "Minimum Donation is 20" });
    if (!userId) return res.json({ error: "Please Login to Donate" });
    if (!campaignId)
      return res.json({ error: "Please select a campaign to Donate" });

    const user = await User.findById(userId);
    const campaign = await Campaign.findById(campaignId);
    if (userId == campaign.campaignOwner) {
      return res.json({ error: "You cannot donate to your own campaign" });
    }
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
              images: [campaign.thumbnail?.url],
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
    res.json({ url: session.url });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create Stripe session" });
    return;
  }
};

// fetch donations
const fetchDonations = async (req, res) => {
  try {
    const donations = await Donation.find()
      .populate("userId", "firstName lastName email")
      .populate("campaignId", "campaignTitle campaignDescription");

    res.status(200).json(donations);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch donations" });
  }
};

// fetch donation by user
const fetchDonationByUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const donations = await Donation.find({ userId }).populate(
      "campaignId",
      "campaignTitle campaignDescription"
    );
    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch donations" });
  }
};

// fetching donation according to campaign
const fetchDonationByCampaign = async (req, res) => {
  try {
    const campaignId = req.params.campaignId;
    const donations = await Donation.find({ campaignId })
      .populate("userId", "firstName lastName email")
      .populate("campaignId", "campaignTitle campaignDescription");
    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch donations" });
  }
};

// fetch single donation
const fetchDonation = async (req, res) => {
  try {
    if (!req.params.id)
      return res.status(400).json({ error: "Invalid Campaign" });
    const donation = await Donation.findById(req.params.id)
      .populate("userId", "firstName lastName email")
      .populate("campaignId", "campaignTitle campaignDescription");
    res.status(200).json(donation);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch donation" });
  }
};

module.exports = {
  createDonation,
  
  fetchDonation,
  fetchDonationByCampaign,
  fetchDonationByUser,
  fetchDonations
};
