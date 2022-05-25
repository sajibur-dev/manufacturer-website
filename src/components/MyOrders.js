import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../firebase.init";
import DeletingProductModal from "./DeletingProductModal";
import MyOrderRow from "./MyOrderRow";

const MyOrders = () => {
  const [deletingProduct, setDeletingProduct] = useState(null);
  const [user] = useAuthState(auth);
  const uid = user?.uid;
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery(["orders", uid], () =>
    fetch(`https://nameless-chamber-79166.herokuapp.com/orders/${uid}`, {
      headers: {
        authorization: `Berer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  console.log("order", orders);
  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th>id</th>
            <th>product</th>
            <th>product quantity</th>
            <th>price</th>
            <th>payment</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order) => (
            <MyOrderRow
              setDeletingProduct={setDeletingProduct}
              order={order}
              refetch={refetch}
            />
          ))}
        </tbody>
      </table>
      {deletingProduct && (
        <DeletingProductModal
          deletingProduct={deletingProduct}
          refetch={refetch}
          setDeletingProduct={setDeletingProduct}
        />
      )}
    </div>
  );
};

export default MyOrders;
