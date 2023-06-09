import React from 'react';
import CheckoutForm from './checkoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import useBookingClassCarts from '../../../../Hooks/useBookingClassCarts';
import { useParams } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_51NEVNSIL22UQzT5CaRMmiuDssQXQe65drJCQamhfOvf5mk4apP9EiZ07YPf9NSwANM6XHeNgUlnoSKcXrrSs6hwP00G7ThTzQE')

const Payment = () => {
    const [classes, refetch] = useBookingClassCarts()
    const id = useParams()
    console.log(id.id);
    const priceClass = classes.find(single => single._id === id.id)

    const price = priceClass?.price
    console.log(price);
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} classes={classes}></CheckoutForm>
            </Elements>

        </div>
    );
};

export default Payment;