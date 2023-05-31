import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv"
import mysql from "mysql2"
import Stripe from "stripe";

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Woodward20!",
    database: "calendarapi"
})

app.use(express.json())
dotenv.config()
const stripeSecretKey = process.env.STRIPE_SECRET_TEST;
const stripeClient = new Stripe(stripeSecretKey);

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

app.post("/calendar", (req, res) => {
    const q = "INSERT INTO Scheduler_Notes (`Name`, `Number`, `Email`, `Special_Notes`, `Type_Of_Session`, `Duration`) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.Name,
        req.body.Number,
        req.body.Email,
        req.body.Special_Notes,
        req.body.Type_Of_Session,
        req.body.Duration
    ];

    db.query(q,values, (err, data) => {
        if(err) {
            // return res.json(err)
            console.log("Error with storing that thing: ", err);
            return res.json({ success: false });
    }
    console.log("Data stored propery and securely");
    return res.json({ success: true });
});
})


app.get("/calendar", (req, res) => {
    const q = "SELECT * FROM calendarapi.Scheduler_Notes";
    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
});

app.post("/payment", cors(), async (req, res) => {
    let {amount, id} = req.body
    try {
        const payment = await stripeClient.paymentIntents.create({
            amount, 
            currency: "USD",
            description: "Bozier Personal Training",
            payment_method: id,
            confirm: true
        })
        console.log("Payment, son", payment)
        res.json({
            message: "Payment was successful as all hell",
            success: true
        })

    } catch (error) {
        console.log("Was a damn Error", error)
        res.json({
            message: "Payment was denied... or it failed",
            success: false
        })
    }
})
app.listen(process.env.PORT || 4000, () => {
    console.log("Server listening on that port 4000")
})
