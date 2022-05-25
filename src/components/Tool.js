import { faCartArrowDown, faCircleDollarToSlot, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from 'react-router-dom';

const Tool = ({product}) => {
  const navigate = useNavigate()
    const {_id, name,image,minimumOrderQuantity,pricePerProduct,shortDescription,availableQuantity } = product;
    const showingDesctiption = shortDescription?.slice(0,100)
  return (
    <div class="card max-w-lg bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
          className="w-1/2"
        />
      </figure>
      <div class="card-body text-accent ">
        <h2 class="card-title">{name}</h2>
        <p className="text-sm">{showingDesctiption}</p>
        <div className="flex justify-between items-center  my-5">
          <h4><FontAwesomeIcon className="text-primary" icon={faCartArrowDown}/> : {minimumOrderQuantity} (min)</h4>
          <h4><FontAwesomeIcon className="text-primary" icon={faDatabase}/> : {availableQuantity} (available)</h4>
        </div>
        <h4 className=" mb-5"><FontAwesomeIcon className="text-primary" icon={faCircleDollarToSlot}/> : {pricePerProduct} (per product)</h4>
        <div class="card-actions justify-end">
          <button class="btn btn-primary" onClick={() => navigate(`purchease/${_id}`)}>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
