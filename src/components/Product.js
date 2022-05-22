import React from "react";

const Product = ({product}) => {
    const { name,image,minimumOrderQuantity,pricePerProduct,shortDescription,availableQuantity } = product;
  return (
    <div class="card max-w-lg bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>{shortDescription}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
