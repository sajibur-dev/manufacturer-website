import { faBan, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { toast } from "react-toastify";

const DeletingProductModal = ({deletingProduct,setDeletingProduct,refetch}) => {
    const { _id,product} = deletingProduct;
    const removeProduct = (_id) => {
        fetch(`http://localhost:5000/orders/${_id}`,{
            method:"DELETE"
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.acknowledged){
                console.log(data);
                toast.success(`${product} delete successfull`)
                setDeletingProduct(null);
                refetch();
            }
            
        })
    }
  return (
    <>

      <input type="checkbox" id="delete-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Are you sure , you wan't delete <span className="text-primary">{product}</span>
          </h3>
          <p class="py-4">
            Once you delete you can't find {product}, this product!!!
          </p>
          <div class="modal-action">
              <button onClick={() => removeProduct(_id)}>
                  <FontAwesomeIcon className="text-xl mr-3 text-gray-500 hover:text-red-600 " icon={faTrashCan}/>
              </button>
            <label for="delete-modal" class="btn">
            <FontAwesomeIcon icon={faBan} />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeletingProductModal;
