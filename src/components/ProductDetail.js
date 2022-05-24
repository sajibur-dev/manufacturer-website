import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


const ProductDetail = ({ product,setProduct ,date ,setDate}) => {
  const {
    name,
    image,
    shortDescription,
    size,
    rating,
    pricePerProduct,
    minimumOrderQuantity,
    material,
    color,
    availableQuantity,
  } = product;
  const showingDescription = shortDescription.slice(0, 500);
  return (
    <div className="p-10 my-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div>
          <img src={image} className="w-1/2 mx-auto" alt="product-img" />
        </div>
        <div className="space-y-5">
          <h1 className="text-accent font-bold">{name}</h1>
          <h1>
            {[...Array(rating).keys()].map((r) => (
              <FontAwesomeIcon className="text-primary mr-1" icon={faStar} />
            ))}
          </h1>
          <h1 className="text-lg text-slate-800 font-bold">
            price : <span className="font-normal">${pricePerProduct}</span>{" "}
          </h1>
          <p className="text-sm">{showingDescription}</p>
          <p className="text-slate-800 font-bold">
            Availability :{" "}
            {availableQuantity ? (
              <span className="font-normal">{availableQuantity} pic</span>
            ) : (
              <p className="text-red-600">sold out</p>
            )}
          </p>

          <p className="text-slate-800 font-bold">
            Minimum order{" "}
            <span className="font-normal">{minimumOrderQuantity} pic</span>
          </p>
          <label onClick={()=>setProduct(product)} for="product-modal" class="btn modal-button">place order</label>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
