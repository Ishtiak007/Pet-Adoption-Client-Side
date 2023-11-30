import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";


const CheckoutForm = () => {
    const [donation, setDonation] = useState(5);
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    // const navigate = useNavigate();

    useEffect(() => {
        if (donation > 0) {
            axiosSecure.post('/create-payment-intent', { price: donation })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, donation])

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const donationValue = form.yourDonation.value;
        setDonation(donationValue);

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('Payment error', error)
            setError(error.message)
        }
        else {
            console.log('Payment method', paymentMethod)
            setError('')
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        });

        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction ID', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                const payment = {
                    email: user.email,
                    price: donation,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    status: 'pending'
                }
                const res = await axiosSecure.post('/payments', payment);
                console.log('payment saved', res);
                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Thank You, Your donation Successfully done",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    // navigate('/dashboard/paymentHistory')
                }
            }
        }

    }
    return (
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
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <div className="form-control">
                <label className="label">
                    <span className="label-text font-semibold">Your Donation</span>
                </label>
                <input type="text" name="yourDonation" placeholder="Your Donation" className="input input-bordered" required />
            </div>
            <button className="btn btn-primary my-4" type="submit" disabled={!stripe || !clientSecret} >
                Donate
            </button>
            <p className="text-red-500">{error}</p>
            {transactionId && <p className="text-green-400">Your transaction id : {transactionId}</p>}
        </form>
    );
};

export default CheckoutForm;