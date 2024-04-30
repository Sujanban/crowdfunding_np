const Stripe = require("stripe");
const User = require("../models/user.model");
const Donation = require("../models/donation.model");
const Campaign = require("../models/campaign.model");

// creating a donation
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

    // const donation = new Donation({
    //   campaignId,
    //   userId,
    //   amount,
    //   session: session.id,
    // });
    // await donation.save();
    // await User.findByIdAndUpdate(userId, {
    //   $push: { donations: donation._id },
    // });
    res.json({ url: session.url });
  } catch (error) {
    res.status(500).json({ error: "Failed to create Stripe session" });
    return;
  }
};

// fetching all donations
const fetchAllDonation = async (req, res) => {
  try {
    const sortOrder = req.query.sortOrder === "asc" ? 1 : -1;
    const page = parseInt(req.query.page) || 1; 
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const donations = await Donation.find()
      .populate("userId", "firstName lastName email")
      .populate("campaignId", "campaignTitle campaignDescription")
      .sort({ createdAt: sortOrder })
      .skip(skip)
      .limit(limit);

    res.status(200).json({ donations, page, limit });
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

const fetchWebhook = async (request, response) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const endpointSecret =
    "whsec_83b246de759af3a324aef79fdc01aae5d9fd8d123b1114c61d35a4c90a7bd1f0";

  const sig = request.headers["stripe-signature"];
  let event;
  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case "payment_intent.succeeded":
    // case "checkout.session.completed":
      const paymentIntent = event.data.object;
      console.log(`PaymentIntent for ${paymentIntent} was successful!`);
      console.log(paymentIntent);

      try {
        const sessionId = paymentIntent.id; // Stripe payment intent ID
        const amount = paymentIntent.amount_received / 100; // Convert from cents to dollars
        const customerEmail =
          paymentIntent.charges.data[0].billing_details.email;
        const campaignId = paymentIntent.client_reference_id; // Assuming this references the campaign

        // Find the user by email
        const user = await User.findOne({ email: customerEmail });
        if (!user) {
          console.error("User not found for email:", customerEmail);
          return;
        }
        const campaign = await Campaign.findById(campaignId);
        if (!campaign) {
          console.error("Campaign not found for ID:", campaignId);
          return;
        }
        const donation = new Donation({
          userId: user._id,
          campaignId: campaign._id,
          amount: amount,
          session: sessionId,
        });
        await donation.save();

        console.log("Donation recorded:", donation);
      } catch (error) {
        console.error("Error handling successful payment:", error);
      }

      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();
};

module.exports = {
  createDonation,
  fetchAllDonation,
  fetchDonation,
  fetchWebhook,
};
