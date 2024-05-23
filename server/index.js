const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cookie_parser = require("cookie-parser");
const { default: Stripe } = require("stripe");

const User = require("./models/user.model");
const Donation = require("./models/donation.model");
const Campaign = require("./models/campaign.model");

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

const app = express();
app.use(cookie_parser());
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);
app.use("/static", express.static("uploads"));

mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => console.log(err));

app.post(
  "/api/donation/webhook",
  express.raw({ type: "application/json" }),
  async (request, response) => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRETE_KEY;
    const sig = request.headers["stripe-signature"];
    let event;
    try {
      event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
      console.log(event.type);
    } catch (err) {
      console.log(err);
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
    switch (event.type) {
      case "checkout.session.completed":
        const paymentIntent = event.data.object;
        console.log(paymentIntent);
        try {
          const sessionId = paymentIntent.id;
          const amount = paymentIntent.amount_total / 100;
          const customerEmail = paymentIntent.customer_email;
          const campaignId = paymentIntent.client_reference_id;

          const user = await User.findOne({ email: customerEmail });
          const campaign = await Campaign.findById(campaignId);

          const donation = new Donation({
            userId: user._id,
            campaignId: campaign._id,
            amount: amount,
            session: sessionId,
          });
          await donation.save();

          const updateCampaign = await Campaign.findByIdAndUpdate(
            campaignId,
            {
              $inc: { raisedAmount: amount },
            },
            { new: true }
          );
          await updateCampaign.save();

          // Increase the account balance of the campaign owner
          const campaignOwner = await User.findById(campaign.campaignOwner);
          campaignOwner.accountBalance += amount; // Assuming account balance is in the user document
          await campaignOwner.save();
        } catch (error) {
          console.error("Error handling  payment:", error);
        }
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
    response.send();
  }
);
app.use(express.json({ limit: "50mb" }));

app.use("/api/auth/", require("./routes/authRoutes"));
app.use("/api/category/", require("./routes/categoryRoutes"));
app.use("/api/user/", require("./routes/userRoutes"));

// campaign routes
app.use("/api/campaign/", require("./routes/campaignRoutes"));

// donation routes
app.use("/api/donation/", require("./routes/donationRoutes"));

// banking routes
app.use("/api/bank/", require("./routes/payoutRoutes"));

// story routes
app.use("/api/story/", require("./routes/storyRoutes"));

app.listen(port, () => console.log(`Server running on port: ${port}`));


console.log((__dirname) + '/client/')