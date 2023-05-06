import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./paymentForm/PaymentForm";

const PUBLIC_KEY = "pk_test_51MtGJLBsGKDDlKM9SgUxTGdJxn22eztx0KOWwNxrnhjJiJIveJ3kO70susEIAfINsSMguEpXXrHJh3V65JJXKdQE00tmxJXYPE"

const stripetestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    return (
        <Elements stripe={stripetestPromise}>
            <PaymentForm/>
        </Elements>
    )
}