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
    <div class="carousel w-full mt-14">
      {
          reviews?.map((review) => <Review count={count} review={review}/>)
      }
    </div>
  );
};

export default CustomerReview;
