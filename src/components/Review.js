import React from "react";

const Review = ({ review, count }) => {
  const { id, name, role, description, images } = review;
  console.log("id", id);
  console.log("count", count);
  return (
    <div id={`slide${id}`} class="carousel-item relative w-full text-center">
      <div className="space-y-5">
        <p>{description}</p>
        <div class="avatar">
          <div class="w-24 rounded-full">
            <img src={images} alt="iamge1" />
          </div>
        </div>
        <div>
          <h4 className="text-lg uppercase">{name}</h4>
          <p className="text-sm">{role}</p>
        </div>
      </div>
      <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={`#slide${id === 1 ? count : id - 1}`} class="btn btn-circle">
          ❮
        </a>
          <a href={`#slide${id === count ? 1 : id + 1}`} class="btn btn-circle">
            ❯
          </a>
      </div>
    </div>
  );
};

export default Review;
