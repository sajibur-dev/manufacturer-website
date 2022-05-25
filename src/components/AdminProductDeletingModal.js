import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { toast } from "react-toastify";

const AdminProductDeletingModal = ({deletingProduct,setDeletingProduct,refetch}) => {
    const  {_id,name} = deletingProduct;
const removeItem = (_id) => {
    fetch(`https://nameless-chamber-79166.herokuapp.com/products/${_id}`,{
        method:'DELETE',
        headers:{
            authorization: `Berer ${localStorage.getItem("accessToken")}`,
        }
    }).then((res)=>res.json())
    .then((result) => {
        console.log(result);
        if(result.acknowledged){
            setDeletingProduct(null)
            toast.success('successfully deleted');
            refetch();
        }
    })
}
  return (
    <div>
      <input type="checkbox" id="product-delete-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Are you sure,You wan't delete <span className="text-primary text-2xl">{name}</span>
          </h3>
          <div class="modal-action">
              <button onClick={() => removeItem(_id)}>
              <FontAwesomeIcon className="text-xl" icon={faTrashCan} />
              </button>
            <label for="product-delete-modal" class="btn">
              cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProductDeletingModal;
