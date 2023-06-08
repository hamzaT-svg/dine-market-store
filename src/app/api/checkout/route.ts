import { NextRequest, NextResponse } from "next/server";

import Stripe from 'stripe';


const stripe = new Stripe("sk_test_51IXMPtJlp1xXjdUAklCwx6sMdWT9QkhWbO5zsOHEqL41LwalWhuapbIXyfh0H5sVqu2dunUYPG39NaIInbzXvM0a00hHms6UG5", {
    maxNetworkRetries: 1,
    apiVersion: "2022-11-15"
});

export async function POST(request: NextRequest) {
    try {
        // Create Checkout Sessions from body params.
        const params: Stripe.Checkout.SessionCreateParams = {
            // submit_type: 'Order',
            mode: 'payment',
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: "Testing"
                        },
                        unit_amount: 1200 * 100 // because stripe interprets price in cents
                    },
                    quantity: 2
                }
            ],
            success_url: `https://dine-market-rose.vercel.app/success`,
            cancel_url: `https://dine-market-rose.vercel.app/canceled`,
        };
        const session: Stripe.Checkout.Session = await stripe.checkout.sessions.create(
            params
        );

        return NextResponse.json({ session });
    } catch (error) {
        return NextResponse.json({ message: (error as { message: string; }).message });
    }

}