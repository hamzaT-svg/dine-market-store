"use client";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { toast } from "react-hot-toast";

import { RootState } from "@/store";

import { useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const Checkout = () => {
  const { items } = useAppSelector((state) => state.cart);
  const stripePromise = loadStripe(
    "pk_test_51IXMPtJlp1xXjdUASLsxo8GeJLOZUdvwo1fTBLGMUcBMZfNJYQ39pYNtsLHGG0uxUeqJn3u1TCBt82Lwr9567wt600saNOcjA2"
  );

  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      // const stripe = await stripePromise;
      // // Create a Checkout Session.
      // const stripeResponse: any = await fetch(
      //   `https://dinemarket-hamza-tasadaq.vercel.app/api/checkout`,
      //   {
      //     method: "POST",
      //     body: JSON.stringify(items),
      //   }
      // );

      // if (stripeResponse.statusCode === 500) {
      //   console.error(stripeResponse.message);
      //   return;
      // }

      // const { session } = await stripeResponse.json();

      const re = await fetch(
        `https://dinemarket-hamza-tasadaq.vercel.app/api/cart`,
        {
          method: "POST",
          body: JSON.stringify({ items }),
        }
      );
      console.log(re);

      // await stripe?.redirectToCheckout({ sessionId: session?.id });
    } catch (err) {
      console.log(err);
      toast.error("Some Thing Wrong!");
    } finally {
      setIsLoading(false);
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
