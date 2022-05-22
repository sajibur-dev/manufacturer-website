import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const { title, author, date, description, images, admin } = blog;
  return (
    <div class="card max-w-lg bg-base-100 shadow-xl">
      <figure>
        <img src={images} alt="Shoes" className="w-full" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{title}</h2>
        <p>
          By:
          <span className="text-sm text-gray-500">
            {" "}
            {author} . {admin}
          </span>{" "}
          , On:<span className="text-sm text-gray-500">{date}</span>
        </p>
        <div class="card-actions justify-end">
          <Link to="/companyBlogs" className="text-gray-600" >Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
