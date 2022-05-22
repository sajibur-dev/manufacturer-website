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
    },[setReviews])
  return (
    <div class="carousel w-full mt-12">
      {
          reviews?.map((review) => <Review review={review}/>)
      }
    </div>
  );
};

export default CustomerReview;
