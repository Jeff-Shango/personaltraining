import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv"
import Stripe from "stripe";

const app = express()
dotenv.config()
const stripeSecretKey = process.env.STRIPE_SECRET_TEST;
const stripeClient = new Stripe(stripeSecretKey);

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

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