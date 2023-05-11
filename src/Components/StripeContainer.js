import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./paymentForm/PaymentForm";

const PUBLIC_KEY = "pk_test_51MtGJLBsGKDDlKM95QhIu1EawubAQO1L3Dn7zbKNaHkUTIamKstKt27WMjwiL3rCA9tCrmMNYPjPZPUojWrYIml700CJjX5kjz"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm/>
        </Elements>
    )
}