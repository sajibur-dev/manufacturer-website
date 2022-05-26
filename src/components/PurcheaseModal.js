import { format } from 'date-fns';
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../firebase.init";


const PurcheaseModal = ({ product, setProduct,date }) => {
  console.log(product);
  const [user] = useAuthState(auth);
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
  const formattedDate = format(date, 'PP');
console.log(user);
console.log('date',formattedDate);
const handlePlaceOrder = (e) => {
    e.preventDefault();
    const customer = user?.displayName;
    const customerEmail = user?.email;
    const customerUid = user?.uid;
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const product = name;
    const productQuantity = e.target.quantity.value;
    const price = productQuantity * pricePerProduct;
    const productSize = e.target.size.value;
    const productColor = e.target.color.value;
    const productMaterial = e.target.material.value;

    const orderDetail = {
        customerUid,
        customer,
        customerEmail,
        phone,
        date:formattedDate,
        address,
        product,
        price,
        paid:false,
        status:"unpaid",
        productSize,
        productColor,
        productMaterial,
        productQuantity
    };
    const productQuantityNumber = +productQuantity;
    if(productQuantityNumber >= minimumOrderQuantity && productQuantityNumber <= availableQuantity){
        
        fetch('https://frozen-coast-70492.herokuapp.com/orders',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(orderDetail)
        }).then((res)=>res.json())
        .then((data) => {
            if(data.insertedId){
                toast.success('order save successfully');
                setProduct(null)
            }
        })

    } else {
        toast.error(`please order ${minimumOrderQuantity} to ${availableQuantity}`)
        return;
    }

    
}
  return (
    <div>
      <input type="checkbox" id="product-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box space-y-5">
        <label for="product-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 class="font-bold text-lg">
            Order for <span className="text-blue-700">{name}</span>
          </h3>
          <form className="space-y-3" onSubmit={handlePlaceOrder}>
            <input
              type="text"
              value={user?.displayName}
              disabled
              name="name"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              value={user?.email}
              disabled
              name="email"
              class="input input-bordered w-full max-w-xs"
            />

            <input
              type="text"
              placeholder="quantity"
              name="quantity"
              class="input input-bordered w-full max-w-xs"
              required
            />

            <select name="size" class="select select-bordered w-full max-w-xs" required>
              <option disabled selected>
                size
              </option>
              {
                  size?.map((s) => <option value={s}>{s}</option>)
              }
            </select>

            <select name="color" class="select select-bordered w-full max-w-xs" required>
              <option disabled selected>
                color
              </option>
              {
                  color?.map((c) => <option value={c}>{c}</option>)
              }
            </select>

            <select name="material" class="select select-bordered w-full max-w-xs" required>
              <option disabled selected>
                material
              </option>
              {
                  material?.map((m) => <option value={m}>{m}</option>)
              }
            </select>
            


            <input
              type="text"
              name="phone"
              placeholder="phone number"
              class="input input-bordered w-full max-w-xs"
              required
            />
            <textarea
              name="address"
              class="textarea textarea-bordered block"
              placeholder="write your address"
              required
            ></textarea>
          <input type="submit" value="Place Order" className="btn btn-primary" />
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default PurcheaseModal;
