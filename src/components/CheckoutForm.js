import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = (order) => {
    const stripe =  useStripe()
    const elements = useElements();
    const {_id,price,customer,customerEmail} = order;
    console.log('order pay',order);

    const [cardError,setCardError] = useState();
    const [success,setSuccess] = useState('');

    const [clientSecret,setClentSecret] = useState('');
    useEffect(()=>{
        fetch('https://frozen-coast-70492.herokuapp.com/create-payment-intent',{
            method:'POST',
            headers:{
                'content-type':'application/json',
                authorization: `Berer ${localStorage.getItem("accessToken")}`,
            },
            body:JSON.stringify({price})
        }).then((res) => res.json())
        .then((result) => {
            console.log(result.clientSecret);
            const secretClient = result.clientSecret
            if(secretClient){
                setClentSecret(secretClient)
            }
        })
    },[price])

    console.log('clinet',clientSecret);

    const  handlePayment = async (e) => {
        e.preventDefault();

        // check stripe and element is exist :


        if(!stripe || !elements){
            return;
        };

        // get card element :

        const card = elements.getElement(CardElement);

        if(card === null){
            return;
        }

        // check payment method : 

        const {error,paymentMethod} =  await stripe.createPaymentMethod({
            type:'card',
            card
        });

        setCardError(error?.message || '');
        setSuccess('');
        // check out 

       const {paymentIntent,error:intentError}  = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:card,
                billing_details:{
                    name:customer,
                    email:customerEmail
                }
            }
        });
        if(intentError){
            setCardError(intentError?.message);
        } else {
            setCardError('');
            console.log(paymentIntent);
            setSuccess(paymentIntent.id)
            // update oreder paid and status : 
            fetch(`https://frozen-coast-70492.herokuapp.com/orders/payment/${_id}`,{
                method:'PUT'
            }).then((res)=>res.json())
            .then((result) => {
                console.log(result);
            })
        }
    }
    return (
        <div>
            <form onSubmit={handlePayment}>
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
                <button type="submit" disabled={!stripe || !elements || !clientSecret} className="btn btn-primary btn-xs mt-5">pay</button>
            </form>
            {
                cardError && <p>{cardError?.message}</p>
            }
            {
                success && <p>{success}</p>
            }
        </div>
    );
};

export default CheckoutForm;