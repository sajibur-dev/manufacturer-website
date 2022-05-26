import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useQuery } from "react-query";
import AdminOrderDeleteModal from "./AdminOrderDeleteModal";

const AllOrders = () => {
    const [deletingOrder,setDeletingOrder] = useState(null);
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch("https://thawing-harbor-88814.herokuapp.com/orders", {
      headers: {
        authorization: `Berer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  console.log(orders);
  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>eamil</th>
            <th>product</th>
            <th>date</th>
            <th>status</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order, i) => (
            <tr key={order._id}>
              <th>{i + 1}</th>
              <td>{order?.customer}</td>
              <td>{order?.customerEmail}</td>
              <td>{order?.product}</td>
              <td>{order?.date}</td>
              <td> <span className="text-primary"> {order?.status}</span></td>
              <td>
                {!order?.paid ? <label onClick={() => setDeletingOrder(order)} htmlFor="order-modal" class=" modal-button cursor-pointer">
                    <FontAwesomeIcon icon={faTrashCan}/>
                </label> : <button className="btn btn-xs btn-primary">
                    make shipped
                </button>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {deletingOrder && <AdminOrderDeleteModal deletingOrder={deletingOrder} setDeletingOrder={setDeletingOrder} refetch={refetch}/>}
    </div>
  );
};

export default AllOrders;
