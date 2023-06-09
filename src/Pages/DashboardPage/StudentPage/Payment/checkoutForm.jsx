import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../../../Providers/AuthProvider';

const checkoutForm = ({ price }) => {
    const stripe = useStripe()
    const { user } = useContext(AuthContext)
    const elements = useElements()
    const [axiosSecure] = useAxiosSecure()
    const [clientSecret, setCLientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [processing, setProcessing] = useState(false)

    if (price > 0) {
        useEffect(() => {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    setCLientSecret(res.data.clientSecret)

                })
        }, [price, axiosSecure])
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }
        console.log(card);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('Errror', error
            );
            setError(error.message)
        }
        else {

            console.log('Payment Method', paymentMethod);
        }
        setProcessing(true)
        const { paymentIntent, error: confirmError, } = await stripe.confirmCardPayment(clientSecret,
            {

                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'Anonymous',
                        name: user?.displayName || 'Anonymous'
                    }
                }
            })
        if (confirmError) {
            console.log('confirmError', confirmError);

        } else {
            console.log('PaymentMethod', paymentIntent);
        }


        if (paymentIntent.status === 'succeeded') {
            const transactionId = paymentIntent.id
            setTransactionId(transactionId)
            // const payment = {
            //     email: user?.email,
            //     transactionId: paymentIntent.id,
            //     price,
            //     date: new Date(),
            //     quantity: cart.length,
            //     CartItems: cart.map(item => item._id),
            //     menuItems: cart.map(item => item.menuItemId),
            //     status: 'service pending',
            //     itemsName: cart.map(item => item.name)
            // }

        }
    }


    return (
        <div>
            <form children onSubmit={handleSubmit}
                className='w-3/4 mx-auto' >
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button disabled={!stripe && !clientSecret} className='btn-primary btn  my-5' type="submit" >
                    Pay
                </button>
            </form>
        </div>
    );
};

export default checkoutForm;