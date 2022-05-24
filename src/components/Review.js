import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Review = ({ review }) => {
  const { name, role, description, images,rating } = review;
  

  return (
    <div class="carousel-item flex md:flex-row flex-col  h-full">
      <div>
        <div class="avatar">
          <div class="w-24 rounded-full">
            <img src={`${images || 'https://api.lorem.space/image/face?hash=92313'}`} alt="images" />
          </div>
        </div>
        <p>{name}</p>
        <p className="text-sm">{role}</p>
        <h1>
            {[...Array(+rating).keys()].map((r) => (
              <FontAwesomeIcon className="text-primary text-xs mr-1" icon={faStar} />
            ))}
          </h1>
      </div>
      <div className="h-28 md:overflow-visible overflow-scroll">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Review;
