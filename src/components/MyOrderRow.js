import {
  faThumbsUp,
  faTrashCan
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


const MyOrderRow = ({ order,setDeletingProduct }) => {
  const {product, productQuantity, price } = order;
const paid = false
console.log(order);
  return (
    <tr>
      <th>1</th>
      <td>{product}</td>
      <td>{productQuantity}</td>
      <td>{price}</td>
      <td>
        {price && !paid ? (
          <>
            <button className="btn btn-xs btn-primary mr-3">pay</button>
          </>
        ) : (
            <FontAwesomeIcon className="text-primary text-xl" icon={faThumbsUp} />
        )}
      </td>
      <td>
        {
          price && !paid ? ( <label for="delete-modal" onClick={() => setDeletingProduct(order)}>
          <FontAwesomeIcon className="text-xl cursor-pointer text-gray-500 hover:text-red-500" icon={faTrashCan} />
        </label>) : null
        }
      </td>
    </tr>
  );
};

export default MyOrderRow;
