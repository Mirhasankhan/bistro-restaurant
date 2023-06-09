import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import CheckOutForm from '../../Components/CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useCart from '../../hooks/useCart';

const stripePromise = loadStripe(import.meta.env.VITE_Stripe_Gateway_PK)

const Payment = () => {
    const [cart] = useCart()
    // const total = cart.reduce((sum, item) => sum + item.price, 0)
    const total = 100.52;

    return (
        <div>
            <SectionTitle subHeading={"Please Proceed Payment"} heading={"Payment"}></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckOutForm price={total}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;