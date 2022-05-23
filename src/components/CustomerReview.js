import React, { useEffect, useState } from "react";
import Review from "./Review";

const CustomerReview = () => {
    const [ reviews,setReviews ] =  useState([]);
    useEffect(()=>{
        fetch('reviews.json')
        .then((res) => res.json())
        .then((data) => {
            setReviews(data)
        })
    },[setReviews]);
    const count = reviews?.length
  return (
    <div className="mt-5">
      <h1 className="text-center text-accent text-3xl uppercase">customer review</h1>
      <div  class="carousel w-full mt-14">

      {
          reviews?.map((review) => <Review count={count} review={review}/>)
      }
      </div>
    </div>
  );
};

export default CustomerReview;
