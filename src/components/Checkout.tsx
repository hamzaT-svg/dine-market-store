"use client";

import { Order } from "@/lib/drizzle";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { toast } from "react-hot-toast";

interface CheckoutProps {
  cart: Order[];
}

const Checkout: React.FC<CheckoutProps> = ({ cart }) => {
  // console.log(cart);
  const stripePromise = loadStripe(
    "pk_test_51IXMPtJlp1xXjdUASLsxo8GeJLOZUdvwo1fTBLGMUcBMZfNJYQ39pYNtsLHGG0uxUeqJn3u1TCBt82Lwr9567wt600saNOcjA2"
  );

  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async () => {
    // e.preventDefault();

    try {
      setIsLoading(true);
      const stripe = await stripePromise;
      // Create a Checkout Session.
      const response: any = await fetch(`${process.env.BASE_URL}api/checkout`, {
        method: "POST",
        body: JSON.stringify({
          name: "Checkout",
        }),
      });

      // if (response.statusCode === 500) {
      //   console.error(response.message);
      //   return;
      // }

      const { session } = await response.json();

      await stripe?.redirectToCheckout({ sessionId: session?.id });
    } catch (err) {
      toast.error("Some Thing Wrong!");
    }
  };
  return (
    <button
      disabled={isLoading}
      onClick={handleSubmit}
      className={`bg-[#212121] w-full font-semibold py-2.5 text-white text-sm ${
        isLoading && "opacity-50"
      }`}
    >
      Process to Checkout
    </button>
  );
};

export default Checkout;
