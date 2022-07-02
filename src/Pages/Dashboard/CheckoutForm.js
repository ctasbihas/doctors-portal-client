import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = ({appointment}) => {
    const {price, patient, patientName} = appointment;
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({price})
        })
        .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                setClientSecret(data.clientSecret)
            }
        })
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        
        setCardError(error?.message || '');
        setSuccess('');

        // confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: patient
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message)
        }
        else {
            setCardError('')
            console.log(paymentIntent);
            setTransactionId(paymentIntent.id);
            setSuccess('Payment completed.')
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
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
                                color: '#2774d9',
                            },
                        },
                    }}
                />
                <button type="submit" disabled={!stripe || !clientSecret} className='btn btn-md btn-success mt-4' >
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
                ||
                success && <div className='text-green-500'>
                    <p>{success}</p>
                    <p>Your transaction id: <span className="text-orange-500">{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;