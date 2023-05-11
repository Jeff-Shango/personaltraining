import mysql from "mysql2";
import express from "express";
import dotenv from "dotenv";
import stripe from "stripe";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
dotenv.config();
const stripeInstance = stripe(process.env.STRIPE_SECRET_TEST);
const urlEncodedParser = bodyParser.urlencoded({ extended: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(urlEncodedParser);
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Woodward20!",
  database: "calendarapi",
});

app.post("/payment", cors(), async (req, res) => {
  let { amount, id } = req.body;
  try {
    const payment = await stripeInstance.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Personal Training",
      payment_method: id,
      confirm: true
    });
    console.log("Payment", payment);
    res.json({
      message: "That thang was successful",
      success: true
    });
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: "Try again, son son",
      success: false
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

const calendarPort = 7500;
const stripePort = 8500
app.listen(calendarPort, () => console.log(`Calendar API running on ${calendarPort}`));
app.listen(process.env.PORT, () => {
  console.log(`Stripe API running on ${stripePort}`);
});
