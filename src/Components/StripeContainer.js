import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./paymentForm/PaymentForm";

const PUBLIC_KEY = "pk_live_51MtGJLBsGKDDlKM9WhKAIMEJhlElBL2PeT297ZL1oLzVH6Ivzpc41jpYo9MHn6c7RurxBds06rcUCENpSctnZNGJ00prHakZA6"

const stripetestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    return (
        <Elements stripe={stripetestPromise}>
            <PaymentForm/>
        </Elements>
    )
}