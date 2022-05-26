import React, { useEffect, useState } from "react";
import Review from "../components/Review";


const CustomerReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://frozen-coast-70492.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [setReviews]);
  return ( 
    <div className="mt-5 text-center">
      <h1 className="text-center text-accent text-3xl uppercase">
        customer review
      </h1>
      <div class="h-96 carousel carousel-vertical rounded-box p-5 mt-5">
        {
          reviews.map((review) => <Review review={review}/>)
        }
        
      </div>
    </div>
  );
};

export default CustomerReview;
