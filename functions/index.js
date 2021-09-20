const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51JBzirATyLvF7lEJ7E4RvmwxjJrOcHsU678MCXOiLk5QJVg22TZ1FIPLkMJ8Y7PdLPbIEMJbDgNvsFPxkMR1PkUK00P0Wkejx8");
const async = require("async");
const app = express();


app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("hello Pramith"));

app.post("/payments/create", async((req, res) =>{
  const total = req.query.total;
  const paymentIntent = stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
}));

exports.api = functions.https.onRequest(app);

