import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useQuery } from "react-query";
import AdminProductDeletingModal from "./AdminProductDeletingModal";

const ManageProducts = () => {
  const [deletingProduct, setDeletingProduct] = useState(null);
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("products", () =>
    fetch("http://localhost:5000/products").then((res) => res.json())
  );
  return (
    <div className="lg:w-full">
      <h1 className="text-2xl text-center my-5">all products ...</h1>
      <div class="overflow-x-auto ">
        <table class="table w-full">
          <thead>
            <tr>
              <th>id</th>
              <th>image</th>
              <th>name</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td>
                  <div class="avatar">
                    <div class="lg:w-24 w-12 rounded-full">
                      <img src={product?.image} alt="product" />
                    </div>
                  </div>
                </td>
                <td>{product?.name}</td>
                <td>
                  <label
                    for="product-delete-modal"
                    onClick={() => setDeletingProduct(product)}
                    className="btn btn-ghost hover:text-red-500"
                  >
                    <FontAwesomeIcon className="text-xl" icon={faTrashCan} />
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {deletingProduct && (
          <AdminProductDeletingModal
            deletingProduct={deletingProduct}
            setDeletingProduct={setDeletingProduct}
            refetch={refetch}
          />
        )}
      </div>
    </div>
  );
};

export default ManageProducts;
