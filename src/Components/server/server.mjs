import express from "express";
import mysql from "mysql2";
import cors from "cors";
import dotenv from "dotenv";
import stripe from "stripe";
import bodyParser from "body-parser";

dotenv.config();

const stripeInstance = stripe(process.env.STRIPE_SECRET_TEST);

const app = express();
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({ extended: true });

app.use(jsonParser);
app.use(express.json())
app.use(urlEncodedParser);
app.use(cors());

// Stripe post
app.post("/payment", async (req, res) => {
  let { amount, id } = req.body;
  try {
    const payment = await stripeInstance.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Jeff Bozier, Personal Training",
      payment_method: id,
      confirm: true,
    });
    console.log("Payment", payment);
    res.json({
      message: "Payment successful",
      success: true,
    });
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: "Payment failed",
      success: false,
    });
  }
});

const dbA = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "baltimore",
  database: "calendarapi",
});



app.get("/list", (req, res) => {
  const q = "SELECT * FROM calendarapi.scheduler";
  dbA.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/add", (req, res) => {
  const q =
    "INSERT INTO calendarapi.scheduler (`Name`, `Event`, `Type`, `notes`, `time`, `date`) VALUES (?)";
  const values = [
    req.body.Name,
    req.body.Event,
    req.body.Type,
    req.body.notes,
    req.body.time,
    req.body.date,
  ];

  dbA.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Shit has been posted");
  });
});


const PORT = 7500;

app.listen(PORT, () => console.log(`Running on ${PORT}`));
