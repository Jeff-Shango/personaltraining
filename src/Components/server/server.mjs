import express from "express";
import mysql from "mysql2";
import cors from "cors";
import dotenv from "dotenv";
import stripe from "stripe";
import bodyParser from "body-parser";

dotenv.config();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Woodward20!",
  database: "calendarapi",
});

const stripeInstance = stripe(process.env.STRIPE_SECRET_TEST);

const app = express();
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({ extended: true });

app.use(jsonParser);
app.use(express.json())
app.use(urlEncodedParser);
app.use(cors());

// Stripe database 
app.get("/payment", (req, res) => {
  const q = "SELECT * FROM calendarapi.payment_breakdown";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

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

    // inserting payment
    const q = "INSERT into calendarapi.payment_breakdown (currency, desription, payment_method) VALUES (?, ?, ?)";
    const values = ["USD", "Jeff Bozier, Personal Training", id];
    db.query(q, values, (err, result) => {
      if (err) throw err;
      console.log("Payment put in the payment_breakdown database");
    });

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




app.get("/list", (req, res) => {
  const q = "SELECT * FROM calendarapi.Scheduler_Notes";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/add", (req, res) => {
  const q =
    "INSERT INTO calendarapi.Scheduler_Notes (`Name`, `Number`, `Email`, `Last_Four_Digit`, `Card_Company`, `Special_Notes`, `Type_Of_Session`, `Duration`, `Price`, `Frequency`) VALUES (?)";
  const values = [
    req.body.Name,
    req.body.Number,
    req.body.Email,
    req.body.Last_Four_Digit,
    req.body.Card_Company,
    req.body.Special_Notes,
    req.body.Type_Of_Session,
    req.body.Duration,
    req.body.Price,
    req.body.Frequency
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Shit has been posted");
  });
});


const PORT = 7500;

app.listen(PORT, () => console.log(`Running on ${PORT}`));
