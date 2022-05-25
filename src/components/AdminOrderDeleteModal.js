import React from "react";
import { toast } from "react-toastify";

const AdminOrderDeleteModal = ({deletingOrder,setDeletingOrder,refetch}) => {
    const {_id,product} = deletingOrder;
    const removeOrder = (_id) => {
        fetch(`https://nameless-chamber-79166.herokuapp.com/orders/${_id}`,{
            method:"DELETE",
            headers:{
              authorization : `Berer ${localStorage.getItem('accessToken')}`
            }
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.acknowledged){
                console.log(data);
                toast.success(`${product} delete successfull`)
                setDeletingOrder(null);
                refetch();
            }
            
        })
    }
  return (
    <div>
      <input type="checkbox" id="order-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            are you sure you wan't to delete  <span className="text-primary text-xl">{product}</span>
          </h3>
          <div class="modal-action">
              <button onClick={() => removeOrder(_id)} className="btn btn-error mr-5" >Delete</button>
            <label for="order-modal" class="btn">
              cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrderDeleteModal;
