import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from "react-query";
import { useParams } from 'react-router-dom';
import CheckoutForm from '../components/CheckoutForm';


const PaymentDetail = () => {
    const {id} =  useParams();
    const {data:order,isLoading} =  useQuery(['paymentOrder',id],()=>fetch(`https://frozen-coast-70492.herokuapp.com/orders/payment/${id}`,{
        headers:{
            authorization: `Berer ${localStorage.getItem("accessToken")}`,
        }
    }).then((res)=>res.json()));

    console.log(order);

    const stripePromise = loadStripe('pk_test_51L0cObECmG0okXGwg0vmM6PwRRdceN3aivFpwT5rKn08L5jGsolQvhgbTSMaX4HBTGYnOMOu0RTajc6WerHfPkbR00WpsFKa9f');

    return (
        <div>
          <div class="card w-fil bg-base-100 shadow-xl mx-auto mb-5">
            <div class="card-body">
              <h2>Hello, <span className='text-success text-2xl'>{order?.customer}</span> </h2>
              <p>Your product is <span className="text-orange-500">{order?.product}</span></p>
              <p>You should pay <span className="text-blue-500">${order?.price}</span></p>
            </div>
          </div>
          <div class="card w-full bg-base-100 shadow-xl mx-auto">
            <div class="card-body">
              <Elements stripe={stripePromise}>
                  <CheckoutForm order={order}/>
              </Elements>
            </div>
          </div>
          
        </div>
    );
};

export default PaymentDetail;