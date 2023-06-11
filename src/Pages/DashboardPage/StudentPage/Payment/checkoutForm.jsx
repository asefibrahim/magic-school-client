import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../../../Providers/AuthProvider';
import Swal from 'sweetalert2';


const checkoutForm = ({ priceClass, price, }) => {
    const stripe = useStripe()
    const { user } = useContext(AuthContext)
    const elements = useElements()
    const [axiosSecure] = useAxiosSecure()
    const [clientSecret, setCLientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [cardError, setCardError] = useState('');
    const [processing, setProcessing] = useState(false)
    console.log(priceClass);

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    setCLientSecret(res.data.clientSecret)

                })
        }
    }, [price, axiosSecure])


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
            setCardError(error.message)
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
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),

                itemId: priceClass._id,

                itemName: priceClass?.name,
                itemImage: priceClass.image,
                instructor_name: priceClass.instructor_name
            }
            console.log(priceClass._id);
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertResult.insertedId) {

                        const available_seats = priceClass.available_seats - 1
                        const enrolled_student = priceClass.enrolled_student
                            + 1
                        const updateSeatNumber = {
                            available_seats, _id: priceClass._id,
                            enrolled_student, classId: priceClass.classId
                        }

                        axiosSecure.patch('/updateSeatNumber', updateSeatNumber)

                            .then(data => {
                                console.log(data);
                                Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                )


                            })
                    }

                })

        }
    }


    return (
        <div>
            <h1 className='text-3xl font-medium text-center mt-12'>Price For Your {priceClass?.name} class is $ {priceClass?.price}</h1>

            <form children onSubmit={handleSubmit}
                className='w-1/2 mx-auto mt-28' >
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
                <button disabled={!stripe && !clientSecret && !processing} className='btn-primary btn w-full  mx-auto mt-12 my-5' type="submit" >
                    Pay
                </button>
            </form>

            {cardError && <p className="text-red-600 text-center ml-8">{cardError}</p>}
            {transactionId && <p className="text-green-500 text-center">Transaction complete with transactionId: {transactionId}</p>}
        </div>
    );
};

export default checkoutForm;