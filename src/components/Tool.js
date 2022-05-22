import { faCartArrowDown, faCircleDollarToSlot, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Tool = ({product}) => {
    const { name,image,minimumOrderQuantity,pricePerProduct,shortDescription,availableQuantity } = product;
  return (
    <div class="card max-w-lg bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div class="card-body text-accent ">
        <h2 class="card-title">{name}</h2>
        <p className="text-sm">{shortDescription}</p>
        <div className="flex justify-between items-center  my-5">
          <h4><FontAwesomeIcon className="text-primary" icon={faCartArrowDown}/> : {minimumOrderQuantity} (min)</h4>
          <h4><FontAwesomeIcon className="text-primary" icon={faDatabase}/> : {availableQuantity} (available)</h4>
        </div>
        <h4 className="text-center mb-5"><FontAwesomeIcon className="text-primary" icon={faCircleDollarToSlot}/> : {pricePerProduct} (per product)</h4>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
