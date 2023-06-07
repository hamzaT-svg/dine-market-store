/**
 * This is a singleton to ensure we only instantiate Stripe once.
 */
import { Stripe, loadStripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe | null>;
const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe("pk_test_51IXMPtJlp1xXjdUASLsxo8GeJLOZUdvwo1fTBLGMUcBMZfNJYQ39pYNtsLHGG0uxUeqJn3u1TCBt82Lwr9567wt600saNOcjA2");
    }
    return stripePromise;
};

export default getStripe;
